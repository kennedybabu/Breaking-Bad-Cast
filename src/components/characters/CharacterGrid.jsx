import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../UI/Spinner'

const CharacterGrid = ({items, isLoading }) => {
  return isLoading ? (<Spinner/>) : (<section className='md:px-[2 0px] grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mt-6 py-4'>
      {items.map(item => (
          < CharacterItem  key={item.char_id} item={item}/>
      ))}
  </section>)

}


export default CharacterGrid