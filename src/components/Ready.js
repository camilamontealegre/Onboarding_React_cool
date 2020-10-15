import React from 'react';
import './Ready.css';
import logo from './logo.png';
import {useHistory} from 'react-router-dom';


export default function Ready() {
  const history = useHistory()
    return(
        <div className="hero-image">
              <div className="hero-text">
                <h2><span>WE </span>ARE READY!</h2>
                  <div>
                  <img src={logo} alt="people-growing" className='correct-size-logo'/> 
                  </div>
              </div>
        </div>
    )
}