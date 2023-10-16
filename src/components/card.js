import React from 'react';
import '../css/card.css';

function Card({ className, height, width, title, text, imageSrc, link, children }) {
  return (
    <div className={`card ${className}`} style={{ height, width }}>
      <div className="card-content">
        {imageSrc && <img className="card-image" src={imageSrc} alt={title} />}
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
        {link && <a href={link} target="_blank" rel="noopener noreferrer">Más información</a>}
        {children}
      </div>
    </div>
  );
}



export default Card;
