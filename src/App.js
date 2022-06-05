import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/UI/Header';
import axios from 'axios';


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
        
      </div>
  )
}

export default App;
