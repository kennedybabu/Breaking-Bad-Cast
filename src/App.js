import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/UI/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
      <div>
        <Header />
        <CharacterGrid isLoading={isLoading} items={items}/>
      </div>
  )
}

export default App;
