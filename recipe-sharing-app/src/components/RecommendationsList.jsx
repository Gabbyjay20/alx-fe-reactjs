import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import { useEffect } from 'react'

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations)
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations)

  useEffect(() => {
    generateRecommendations()
  }, [generateRecommendations])

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>🎯 Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some recipes to your favorites to get personalized recommendations!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default RecommendationsList