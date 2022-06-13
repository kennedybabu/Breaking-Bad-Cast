import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/UI/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setIsLoading(false)
      console.log(result.data)
    }

    fetchItems()
  }, [query])

  return (
      <div className='w-full min-h-screen text-white bg px-4'>
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
  )
}

export default App;
