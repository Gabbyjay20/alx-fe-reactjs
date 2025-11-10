import { useState } from 'react'
import useRecipeStore from './recipeStore'

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)
  const [title, setTitle] = useState(recipe.title)
  const极[description, setDescription] = useState(recipe.description)

  const handleSubmit = (event) => {
    event.preventDefault()
    updateRecipe(recipe.id, { title, description })
    alert('Recipe updated successfully!')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Edit Recipe</h3>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
     极<button type="submit">Update Recipe</button>
    </form>
  )
}

export default EditRecipeForm