import img3 from '../assets/Images/pic1.jpeg';
import Products from './Products';
import About from './About';
import Contact from './Contact';

const Home = () => {

  return (
    <div>
    <div className='img3' style={
      {backgroundImage:`url(${img3})`, 
      height:'660px',
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      }}>
    <div className='text-7xl text-white pt-80 pl-10 font-extrabold'>
        <h1>25%  OFF</h1>
        <h1 className='mt-5'>HOILDAYS SALES</h1>
    </div>
    </div>
        <Products />
        <About/>
        <Contact />
    </div>
  );
};

export default Home;
