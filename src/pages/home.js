
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

  return (
    <>
    <Header scrollLeft={scrollLeft} scrollRight={scrollRight} />
    <div className="row card-container">
      <Card className="color1">
      </Card>
      <Card className="color2">
        <p></p>
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
