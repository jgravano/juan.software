import React from 'react';
import '../css/card.css';
import Tilt from 'react-parallax-tilt';

function Card({ className, title, description, media, children }) {
  return (
    <Tilt className="parallax-effect-glare-scale" perspective={20000} glareEnable={true} glareMaxOpacity={0.25} scale={1.02}>
      <div className={`card ${className}`}>
        <div className="card-content">
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
          <div className="media-container">
            {media && media.map((item, index) => (
              <React.Fragment key={index}>
                {(item.type === 'image' || item.type === 'svg') && (
                  <img
                    src={item.src}
                    alt={`media-${index}`}
                    className={item.type === 'svg' ? 'svg-image' : 'card-image'}
                    style={item.style}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          {children}
        </div>
      </div>
    </Tilt>
  );
}


export default Card;