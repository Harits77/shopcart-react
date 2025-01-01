import React, { useEffect, useState ,useContext} from 'react';
import {MyContext} from "../App";

const Cart = () => {
  const {cart,setcart} = useContext(MyContext);
  const Removecart=(product)=>{
    setcart(cart.filter((c)=>c.id !== product.id))
  };
  
  const increaseQuantity = (product) => {
    setcart(
      cart.map((c) =>
        c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
      )
    );
  };

  const decreaseQuantity = (product) => {
    setcart(
      cart.map((c) =>
        c.id === product.id && c.quantity > 1
          ? { ...c, quantity: c.quantity - 1 }
          : c
      )
    );
  };

  const[total,setTotal]=useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + parseInt(curr.price) * curr.quantity, 0)
    );
  }, [cart]);
  

  
  return (
    <div className='p-5 bg-slate-900 text-white '>
       
      {
          cart.length === 0 ? (
            <p>Your cart is empty</p> 
              ) :
        cart.map((product)=>(
          <div className='flex space-x-5 border-2 mt-5 card1 ' key={product.id}>
          <div className=' p-6 md:p-5'>
          <img className='w-40 h-28 mt-2 object-cover' src={product.pic} alt="img" />
        </div>
        <div className='md:p-4 pt-6 data'>
           <h3 className='font-bold'>Product Name : <span >{product.name}</span></h3>
           <p className='font-bold mt-1'>Price RS: <span >{product.price}</span></p>

           <div className="flex items-center mt-2 text-black">
                <button
                  onClick={() => decreaseQuantity(product)}
                  className="bg-gray-300 px-3 py-1 font-bold  rounded-l hover:bg-gray-400">
                  -
                </button>
                <span className="px-4 py-1 bg-gray-200">{product.quantity}</span>
                <button
                  onClick={() => increaseQuantity(product)}
                  className="bg-gray-300 px-3 py-1 font-bold rounded-r hover:bg-gray-400"
                >
                  +
                </button>
              </div>

           <button onClick={()=>Removecart(product)} className='bg-red-500 text-white font-bold rounded hover:bg-red-700 transition duration-300 mt-1 py-2 md:mt-3 px-4 '>Remove to cart</button>
        </div>
        </div>
        ))
      }
     <div className='py-14'>
      <p className='font-bold text-3xl'>Total Amount RS : {total} </p>
    </div>
    </div>
  ) 
}

export default Cart