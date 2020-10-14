import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import specialty from './spec.png';
import foundation from './found.png';
import strategic from './strat.png';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Carousel.Caption className="title-location">
            <h3>SPECIALTY</h3>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src={specialty}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={foundation}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>FOUNDATION</h3>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ strategic }
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>STRATEGIC</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

  
  export default ControlledCarousel