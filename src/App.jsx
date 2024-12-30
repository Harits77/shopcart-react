import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState , createContext } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'

export const MyContext = createContext();

function App() {
   
  const [cart,setcart] = useState([])

  return (
    <MyContext.Provider value={{cart,setcart}}>
      
      <>
       <BrowserRouter>
       <Header cart={cart}/>
       <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/product' element={<Products />}></Route>
           <Route path='/about' element={<About />}></Route>
           <Route path='/cart' element={<Cart />}></Route>
           <Route path='/contact' element={<Contact />}></Route>
       </Routes>
      </BrowserRouter>
    </>
    </MyContext.Provider>
  )
}

export default App
