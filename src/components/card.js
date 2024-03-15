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
                    {item.type === 'image' && <img src={item.src} alt={`media-${index}`} className="card-image" />}
                    {item.type === 'svg' && (
                      typeof item.src === 'string' ? <img src={item.src} alt={`svg-${index}`} className="svg-image" /> : <item.src/>
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