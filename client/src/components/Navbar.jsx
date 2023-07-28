import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">
        Flask Hospital
      </div>
      <div className="space-x-4">
        <a href="/" className="text-white hover:text-gray-300">Home</a>
        <a href="/services" className="text-white hover:text-gray-300">Serviços</a>
        <a href="/doutores" className="text-white hover:text-gray-300"> Doutores </a>
        <a href="/Login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;