import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';

const AnimatedText = ({ text, hoverEffect, textSize }) => {
  const textRef = useRef();
  useFrame((state, delta) => {
    {
      textRef.current.position.y += Math.sin(state.clock.elapsedTime) * delta;
      textRef.current.rotation.y += 0.00005;
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={textSize}
      fontWeight={700}
      color="#5C8984"
      anchorX="center"
      anchorY="middle"
      fontStyle='bold'
    >
      {text}
    </Text>
  );
};

const ResponsiveText = ({ text, isMobile }) => {

  const words = text.split(' ');
  const lineFactor = isMobile ? 1.2 : 0;

  return words.map((word, index) => (
    <Text
      key={word + index}
      fontSize={isMobile ? 0.5 : 1}
      fontWeight={700}
      color="#5C8984"
      anchorX="center"
      anchorY="middle"
      fontStyle='bold'
      position={[0, index * -lineFactor, 0]}
    >
      {word}
    </Text>
  ));
};

export const AnimatedPage = () => {
  const text = "SORRY, WEBSITE UNDER CONSTRUCTION :)";
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
        <OrbitControls />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        {isMobile
          ? <ResponsiveText text={text} isMobile={isMobile} />
          : <AnimatedText text={text} />}
      </Canvas>
    </div>
  );
};
