import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import specialty from './spec.png';
import foundation from './found.png';
import strategic from './strat.png';
import Title from './Title';
import './Studios.css';
import FooterButtons from './FooterButtons';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const history = useHistory()

    return (
      <div>
      <Title className="classes"/>
      <Carousel className="carou"activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Carousel.Caption>
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
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ strategic }
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
       <div className="btns">
       <FooterButtons 
        OnPrevious={()=>{
          history.push("/keypeople")
          }}
        OnNext={()=>{
          history.push("/ready")
         }}
      />
       </div>
      </div>
    );
  }
  
  export default ControlledCarousel