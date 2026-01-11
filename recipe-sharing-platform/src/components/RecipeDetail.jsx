import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-6 text-blue-500 hover:text-blue-700 font-medium"
        >
          ← Back to Recipes
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{recipe.summary}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Instructions
                </h2>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
