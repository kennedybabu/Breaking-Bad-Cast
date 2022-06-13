import React from 'react'
import SpinnerGif from '../../assets/spinner.gif'

const Spinner = () => {
  return (
    <img src={SpinnerGif} alt="loading"  className='w-[200px] m-auto block'/>
  )
}

export default Spinner