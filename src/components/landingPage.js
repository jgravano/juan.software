import React from 'react';
import Card from './card';

function LandingPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'space-between',
      background: 'white',
      margin: '10px',
      padding: '10px',
      boxSizing: 'border-box',
      position: 'relative',
      backgroundColor: '#040D12'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', marginBottom: '1vh' }}>
        <Card className="color1"
          height="28vh"
          width="70vw"
          title={
            <div className="card-content">
              <h2>Juan Gravano</h2>
              <p>software dev</p>
            </div>
          }
          imageSrc={"https://docs.google.com/uc?export=download&id=1Dpwel7xUS-bxBfNQ2B_yLvcnDILPox4o"}
        />


        <Card className="color2" height="28vh" width="25vw" >
          <div className="sub-cards-container">
            <div className="sub-card color-sub1">
              🇦🇷 Based in Buenos Aires, Argentina.
            </div>
            <div className="sub-card color-sub2">
              🇦🇷 Based in Buenos Aires, Argentina.
            </div>
            <div className="sub-card color-sub3">
              🇦🇷 Based in Buenos Aires, Argentina.
            </div>
          </div>
        </Card>

      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', marginBottom: '1vh' }}>
        <Card className="color3" height="28vh" width="40vw">
          <a href="path/to/your/CV.pdf" download className="download-link">
            <h2>
              download resume
              <i className="fa fa-chevron-down" style={{ marginLeft: '10px' }}></i>
            </h2>
          </a>
        </Card>
        <Card className="color4" height="28vh" width="40vw">
          <div className="color4-text1">making stuff happen :)</div>
        </Card>
        <Card className="color5 special-card" height="28vh" width="30vw" imageSrc={"https://docs.google.com/uc?export=download&id=18wbJL_9dBdYs19hz9Aie5ug_0mKfMW2o"} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw' }}>
        <Card className="color6" height="28vh" width="25vw">
          <div className="circle-container">
            <div className="circle color1"></div>
            <div className="circle color2"></div>
            <div className="circle color3"></div>
            <div className="circle color4"></div>
            <div className="circle color5"></div>
            <div className="circle color7"></div>
          </div>
        </Card>
        <Card className="color7" height="28vh" width="70vw">
          <div className="color7-content">
            <div className="color7-column">
              {[...Array(1)].map((_, i) => (
                <div className="color7-header" key={i}>
                  <h2>contact me</h2>
                  <div className="color7-icons">
                    <a href="https://www.github.com/jgravano" target="_blank" rel="noopener noreferrer" className="color7-icon">
                      <i className="fa fa-github-alt fa-2x"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}


export default LandingPage;
