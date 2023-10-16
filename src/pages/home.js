
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';
import '../css/card.css';
import '../css/color1.css';
import '../css/color2.css';
import '../css/color3.css';
import '../css/color4.css';
import '../css/color5.css';
import '../css/color6.css';
import '../css/color7.css';
import '../css/home.css';
import NotFoundPage from './404';

function LandingPage() {
  const [showError, setShowError] = useState(false);
  const circleClasses = ['color1', 'color2', 'color3', 'color4', 'color5', 'color7'];
  const navigate = useNavigate();


  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowError(true);
  }

  if (showError) {
    navigate("/404");
    return <NotFoundPage />;
  }

  return (
    <div className="landingPage">
      <div className="row">
        <Card className="color1" height="28vh" width="70vw" title={
          <div className="card-content">
            <h2>Juan Gravano</h2>
            <p>software dev</p>
          </div>
        }
          imageSrc="https://docs.google.com/uc?export=download&id=1Dpwel7xUS-bxBfNQ2B_yLvcnDILPox4o" />

        <Card className="color2" height="28vh" width="25vw">
          <div className="sub-cards-container">
            <div className="sub-card color-sub1">🇦🇷 Based in Buenos Aires, Argentina.</div>
            <div className="sub-card color-sub2">🇦🇷 Based in Buenos Aires, Argentina.</div>
            <div className="sub-card color-sub3">🇦🇷 Based in Buenos Aires, Argentina.</div>
          </div>
        </Card>
      </div>

      <div className="row">
        <Card className="color3" height="28vh" width="40vw">
          <a href="path/to/your/CV.pdf" onClick={handleDownloadClick} className="download-link">
            <h2>download resume<i className="fa fa-chevron-down" style={{ marginLeft: '10px' }}></i></h2>
          </a>
        </Card>
        <Card className="color4" height="28vh" width="40vw">
          <div className="color4-text1">making stuff happen :)</div>
        </Card>
        <Card className="color5 special-card" height="28vh" width="30vw" imageSrc="https://docs.google.com/uc?export=download&id=18wbJL_9dBdYs19hz9Aie5ug_0mKfMW2o" />
      </div>
      <div className="row">
        <Card className="color6" height="28vh" width="25vw">
          <div className="circle-container">
            {circleClasses.map((className, index) => (
              <div key={index} className={`circle ${className}`}></div>
            ))}
          </div>
        </Card>
        <Card className="color7" height="28vh" width="70vw">
          <div className="color7-content">
            <div className="color7-column">
              <div className="color7-header">
                <h2>contact me</h2>
                <div className="color7-icons">
                  <a href="https://www.github.com/jgravano" target="_blank" rel="noopener noreferrer" className="color7-icon">
                    <i className="fa fa-github-alt fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;
