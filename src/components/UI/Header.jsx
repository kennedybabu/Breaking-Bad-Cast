import React from 'react'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className='pt-4'>
        <img className='m-auto h-[100px] py-2'  src={Logo} alt="logo" />
    </header>
  )
}

export default Header