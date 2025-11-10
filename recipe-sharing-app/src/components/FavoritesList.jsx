import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  )

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>⭐ My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet. Add some recipes to your favorites!</p>
      ) : (
        favorites.map((recipe) => (
          recipe && (
            <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          )
        ))
      )}
    </div>
  )
}

export default FavoritesList