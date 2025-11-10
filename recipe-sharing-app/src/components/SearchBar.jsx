import React from 'react'
import useRecipeStore from './recipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search recipes by title or description..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px'
        }}
      />
    </div>
  )
}

export default SearchBar