import React from 'react';
import { IoIosArrowUp, IoLogoGithub } from 'react-icons/io';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="flex justify-center space-x-4">
        <a href="#top" className="text-white hover:text-gray-300" onClick={handleScrollToTop}>
          <IoIosArrowUp size={20} />
        </a>
        <a href="https://github.com/Alan-Feitosa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <IoLogoGithub size={20} />
        </a>
        <a href="mailto:alan.domeneghi.feitos@outlook.com" className="text-white hover:text-gray-300">
          <FaEnvelope size={20} />
        </a>
        <a href="tel:+5512991434099" className="text-white hover:text-gray-300">
          <FaPhone size={20} />
        </a>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} Flask Hospital. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
