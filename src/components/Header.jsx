import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = ({ cart }) => {
  const [toggle, setToggle] = useState(false);

  const handleClose = () => {
    setToggle(false); 
  };

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          toggle ? 'pb-30' : 'pb-0'
        } bg-black`}
      >
       <div className="flex justify-between p-8 md:p-6 text-2xl text-white font-bold">
          <h1 className='ml-5 h1'>JumpFit Shoes</h1>
          <nav className="hidden md:block">
            <ul className="flex px-10">
              <li className="px-8">
                <Link to="/">Home</Link>
              </li>
              <li className="px-8">
                <Link to="/product">Products</Link>
              </li>
              <li className="px-8">
                <Link to="/about">About</Link>
              </li>
              <li className="px-8">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="px-8">
                <Link to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                 </svg>
                </Link>
              </li>
            </ul>
          </nav>
              <li className="py-2 block md:hidden" style={{listStyle:"none",marginLeft:"450px"}}>
                <Link to="/cart" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 md:size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                 </svg>
                </Link>
              </li>
          <button onClick={() => setToggle(!toggle)}className="block md:hidden">
             <Bars3Icon className="text-white h-14" />
          </button>
        </div>

        {toggle && (
          <nav className="block md:hidden bg-black ">
            
            <ul className="flex flex-col items-center text-white mobile-nav">
              <li className="py-2">
                <Link to="/" onClick={handleClose}>
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link to="/product" onClick={handleClose}>
                  Products
                </Link>
              </li>
              <li className="py-2">
                <Link to="/about" onClick={handleClose}>
                  About
                </Link>
              </li>
              <li className="py-2">
                <Link to="/contact" onClick={handleClose}>
                  Contact
                </Link>
              </li>
             
            </ul>
          </nav>
         )}
        </div>
      </>
    );
  };

export default Header;
