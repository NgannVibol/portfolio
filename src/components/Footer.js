import React from 'react';
import '../styles/global.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {currentYear} <span className="footer-name">Ngann Vibol</span>. 
          Crafted with <span className="footer-heart">❤</span> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;