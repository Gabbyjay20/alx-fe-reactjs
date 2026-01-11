import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientList = ingredients.split('\n').filter((item) => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'Please include at least two ingredients';
      }
    }

    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = {
        title: title.trim(),
        ingredients: ingredients.split('\n').filter((item) => item.trim()),
        steps: steps.split('\n').filter((item) => item.trim()),
      };

      console.log('New Recipe:', newRecipe);
      setSubmitted(true);

      // Reset form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-6 text-blue-500 hover:text-blue-700 font-medium"
        >
          ← Back to Recipes
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Add New Recipe
          </h1>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Recipe submitted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter recipe title"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ingredients (one per line)
              </label>
              <textarea
                id="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                rows={5}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter each ingredient on a new line"
              />
              {errors.ingredients && (
                <p className="mt-1 text-sm text-red-500">{errors.ingredients}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="steps"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preparation Steps (one per line)
              </label>
              <textarea
                id="steps"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                rows={6}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none ${
                  errors.steps ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter each step on a new line"
              />
              {errors.steps && (
                <p className="mt-1 text-sm text-red-500">{errors.steps}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRecipeForm;
