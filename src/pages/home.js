
import useScroll from '../hooks/useScroll';
import React, { useRef } from 'react';
import Card from '../components/card';
import Header from '../components/header';
import '../css/card.css';
import '../css/color1.css';
import '../css/color2.css';
import '../css/color3.css';
import '../css/color4.css';
import '../css/home.css';
import { motion } from 'framer-motion';
import { textVariants } from '../animations/motionVariants';

function LandingPage() {
  const rowRef = useRef(null);
  const { scrollLeft, scrollRight } = useScroll(rowRef);

  const logos = [
    { type: 'svg', src: '/images/javascript.svg' },
    { type: 'svg', src: '/images/kotlin-icon.svg' },
    { type: 'svg', src: '/images/linux-tux.svg' },
    { type: 'svg', src: '/images/nodejs.svg' },
    { type: 'svg', src: '/images/python.svg' },
    { type: 'svg', src: '/images/react.svg' },
    { type: 'svg', src: '/images/selenium.svg' },
    { type: 'svg', src: '/images/webdriverio.svg' },
  ];

  const avatar = [{ type: 'image', src: '/images/Avatar.png' }]

  const angleStep = (2 * Math.PI) / logos.length;
  const radius = 190; 
  const logosWithPositioning = logos.map((logo, index) => {
    const angle = index * angleStep;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return {
      ...logo,
      style: {
        position: 'absolute',
        left: `50%`,
        top: `50%`,
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
      }
    };
  });
  

  return (
    <>
      <Header scrollLeft={scrollLeft} scrollRight={scrollRight} />
      <div className="row card-container">
        <Card className="color1" media={avatar}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.span>Hola, </motion.span>
            <motion.span>soy Juan</motion.span>
          </motion.div>
        </Card>
        <Card className="color2" media={logosWithPositioning}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <span>Soy desarrollador de software.</span>   
          </motion.div>
        </Card>
        <Card className="color3">
          <p></p>
        </Card>
        <Card className="color4">
          <p></p>
        </Card>
      </div>
    </>
  );
}

export default LandingPage;
