import React from 'react';
import '../index.css';  // Ensure you have Tailwind setup here
import logo from './logo.png';

const Header = () => {
  return (
    <div className='header flex justify-between items-center p-4 bg-gray-100 shadow-md'>
      <div className='logo'>
        {/* Nilesh work Here */}
        <img src={logo} alt="Logo" className='h-20 w-auto' />
      </div>
      <div className='items'>
        {/* Khusbu work Here */}
        <ul className='flex space-x-6 text-lg'>
          <li className='hover:text-blue-500 cursor-pointer'>Home</li>
          <li className='hover:text-blue-500 cursor-pointer'>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
