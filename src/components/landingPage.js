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
      backgroundColor: 'black'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', marginBottom: '1vh' }}>
        <Card className="color1"
          height="28vh"
          width="80vw"
          title={
            <div className="card-content">
              <h2>Juan Gravano</h2>
              <p>Software Engineer</p>
            </div>
          }
          imageSrc={"https://docs.google.com/uc?export=download&id=1Dpwel7xUS-bxBfNQ2B_yLvcnDILPox4o"}
        />


        <Card className="color2" height="28vh" width="20vw" >
          <div className="sub-cards-container">
            <div className="sub-card color-sub1">
              based in Buenos Aires, Argentina.
            </div>
            <div className="sub-card color-sub2">
              based in Buenos Aires, Argentina.
            </div>
            <div className="sub-card color-sub3">
              based in Buenos Aires, Argentina.
            </div>
          </div>
        </Card>

      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', marginBottom: '1vh' }}>
        <Card className="color3" height="28vh" width="40vw" />
        <Card className="color4" height="28vh" width="45vw">
          <div className="color4-text1">making stuff happen :)</div>
        </Card>
        <Card className="color5 special-card" height="28vh" width="30vw" imageSrc={"https://docs.google.com/uc?export=download&id=18wbJL_9dBdYs19hz9Aie5ug_0mKfMW2o"} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw' }}>
        <Card className="color6" height="28vh" width="40vw" />
        <Card className="color7" height="28vh" width="60vw">
          <div className="color7-header">
            <h2>Contact me:</h2>
            <div className="color7-icons">
              <a href="https://www.github.com/tu_nombre_de_usuario" target="_blank" rel="noopener noreferrer" className="color7-icon">
                <i className="fa fa-github-alt fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/tu_nombre_de_usuario" target="_blank" rel="noopener noreferrer" className="color7-icon">
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </Card>


      </div>
    </div>
  );
}


export default LandingPage;
