import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({cart}) => {
  return (
    <>
     <nav className='flex justify-between p-5 text-2xl text-white font-bold bg-black'>
        <h1>JumpFit Shoes</h1> 
        <ul className='flex px-10'>
            <li className='px-8'><Link to="/">Home</Link></li>
            <li className='px-8'><Link to="/product">Products</Link></li>
            <li className='px-8'><Link to="/about">About</Link></li>
            <li className='px-8'><Link to="/contact">Contact</Link></li>
            <li className='px-8'><Link to='/cart'><span className='mr-3 p-1 bg-yellow-400 rounded-full'>{cart.length}</span>Cart</Link></li>
        </ul>
     </nav>
    </>
  )
}


export default Header