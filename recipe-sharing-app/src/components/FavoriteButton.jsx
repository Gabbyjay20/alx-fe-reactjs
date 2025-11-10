import useRecipeStore from './recipeStore'

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites)
  const addFavorite = useRecipeStore((state) => state.addFavorite)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)

  const isFavorite = favorites.includes(recipeId)

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(recipeId)
      alert('Removed from favorites!')
    } else {
      addFavorite(recipeId)
      alert('Added to favorites!')
    }
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isFavorite ? '#ff4444' : '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '10px'
      }}
    >
      {isFavorite ? '❤️ Remove Favorite' : '🤍 Add to Favorites'}
    </button>
  )
}

export default FavoriteButton