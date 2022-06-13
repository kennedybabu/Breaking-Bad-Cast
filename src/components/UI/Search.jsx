import { getSuggestedQuery } from '@testing-library/react'
import React, {useState} from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }


  return (
    <div className='w-full flex items-center'>
        <form action="#" className='m-auto py-2'>
            <input type="text" placeholder='search' value={text} onChange={(e) => onChange(e.target.value)} className='form-control focus:outline-none active:outline-none p-1  max-w-[600px] text-black'/>
        </form>
    </div>
  )
}

export default Search