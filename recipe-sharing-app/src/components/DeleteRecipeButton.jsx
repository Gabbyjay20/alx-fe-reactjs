import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId)
      navigate('/')
      alert('Recipe deleted successfully!')
    }
  }

  return (
    <button 
      onClick={handleDelete}
      style={{ 
        backgroundColor: '#ff4444', 
        color: 'white', 
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton