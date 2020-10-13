import React from 'react';
import { Button } from 'react-bootstrap';

function FooterButtons({OnPrevious, OnNext}) {
    const divStyle = {
        paddingBottom: '30px',
        backgroundColor: '#37b051',
        borderColor: 'transparent'
      }
    return (
      <div className="buttons">
      <Button onClick={OnPrevious} style={divStyle} className="next-button">Previous</Button>
      <Button onClick={OnNext} style={divStyle}className="next-button">Next</Button>
      </div>
    );
}
export default FooterButtons;