import React from 'react'

const CharacterGrid = ({items, isLoading }) => {
  return isLoading ? (<h1>Text is loading</h1>) : (<section className='grid grid-cols-2 md:grid-cols-4'>
      {items.map(item => (
          <h1>{item.name}</h1>
      ))}
  </section>)
}

export default CharacterGrid