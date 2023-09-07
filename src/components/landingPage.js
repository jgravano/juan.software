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
      boxSizing: 'border-box', // Cambio de content-box a border-box
      position: 'relative',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', marginBottom: '1vh' }}>
        <Card className="color1" height="28vh" width="60vw" title={"Juan Gravano"} text={"software developer"} imageSrc={""} />
        <Card className="color2" height="28vh" width="40vw" title={"based in Buenos Aires, Argentina"} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', marginBottom: '1vh' }}>
        <Card className="color3" height="28vh" width="40vw" />
        <Card className="color4" height="28vh" width="45vw">
          <div className="color4-text1">making stuff</div>
          <div className="color4-text2">happen :)</div>
        </Card>
        <Card className="color5" height="28vh" width="30vw" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw' }}>
        <Card className="color6" height="28vh" width="20vw" />
        <Card className="color7" height="28vh" width="80vw" title={"Contact me: "} />
      </div>
    </div>
  );
}


export default LandingPage;
