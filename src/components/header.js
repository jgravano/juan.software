import React from 'react';
import '../css/header.css'; 
const Header = ({ scrollLeft, scrollRight }) => {
  return (
    <div className="header">
      <div className="header-content">
        <span>Juan Gravano</span>
      </div>
      <div className="header-arrows">
        <button onClick={scrollLeft}>&lt;</button>
        <button onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default Header;
