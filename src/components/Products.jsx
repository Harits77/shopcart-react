import { useState } from 'react';
import data from '../assets/Images/product.json';
import { useContext } from 'react';
import { MyContext } from '../App';
import 'swiper/css';
import 'swiper/css/navigation';


const Products = () => {
  const { cart, setcart } = useContext(MyContext);

  const addcart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setcart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const [product] = useState(data);

  return (
    <div className="bg-slate-800 w-full pb-12">
        
      <div className="hidden md:grid grid-cols-3 pl-9 card">
        {product.map((product) => (
          <div
            key={product.id}
            className="w-76 ml-10 md:w-80 mt-10 pb-5 rounded hover:scale-105 transform transition duration-300 bg-white"
          >
            <img
              className="w-72 md:w-80 h-52 object-cover pic"
              src={product.pic}
              alt="fail"
            />
            <div className="ml-5 text-xl mt-3 md:ml-4">
              <h3 className="font-bold">{product.name}</h3>
              <p className="pt-2 font-bold">${product.price}</p>
            </div>
            <div className="ml-4 mt-8 my-3">
              <button
                onClick={() => addcart(product)}
                className="bg-blue-700 text-white font-bold py-2 w-72 rounded hover:bg-blue-900 transition duration-300 btn"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
