import React from 'react';
import img2 from '../assets/Images/pic2.jpg';

const About = () => {
  return (
    <div className="about flex flex-col lg:flex-row justify-between items-center p-10 pt-20 pb-32 bg-slate-700 gap-12">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={img2}
          alt="About Us"
          className="rounded-lg shadow-lg img2"
          style={{ height: '400px', width: '600px', backgroundSize:"cover" }}
        />
      </div>

      <div className="text-3xl text-white font-bold space-y-9 text-center lg:text-left">
        <h1>Welcome to JumpFit Shoes!</h1>
        <p className="text-lg text-gray-300 font-normal">
          At JumpFit Shoes, we strive to bring you the best in style, comfort, and affordability. From casual sneakers to formal footwear, we have a wide range of options to suit every occasion.
        </p>
        <h2 className="mt-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Free shipping on orders over $50.</li>
          <li>Hassle-free 30-day return policy.</li>
          <li>Customer support available 24/7.</li>
          <li>Exclusive deals and seasonal discounts.</li>
        </ul>
        <p className="text-lg text-gray-300 font-normal mt-4">
          Step into a world of quality and convenience at ShoeShop. Your perfect pair is just a click away!
        </p>
      </div>
    </div>
  );
};

export default About;
