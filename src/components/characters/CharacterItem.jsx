import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='md:h-[300px] max-w-[250px] lg:h-[300px] overflow-hidden group cursor-pointer char-card'>
        <div className='h-full'>
            <img src={item.img} alt="character" className='h-full w-full'/>
        </div>
        <div className="h-full w-full z-10 overlay group:hover-flex flex-col items-center justify-start p-3 duration-300 overlay">
            <h2 className='font-bold text-xl'>{item.name}</h2>
            <p>D.O.B: {item.birthday}</p>
            <p>Nickname: {item.nickname}</p>
            <small>{item.status}</small>
        </div>
    </div>
  )
}

export default CharacterItem