import React, { useState } from 'react';
import './ThirdPage.css';
import growingpath from './growing-path2.png';
import Accordion from './Accordion'


 function ThirdPage(){
  const [ seniority, setSeniority ] = useState([
    {
      title:'Initial and Mid Level',
      description:'Junior, Junior Advanced, Semi Senior, Semisenior Advanced',
      open: false
    },
    {
      title:'Senior',
      description:'Senior, Software designer, Architect',
      open: false
    },
    {
      title:'Expert and MGM',
      description:'Junior, Junior Adavanced, Semi Senior, Semisenior Advanced',
      open: false
    },
    {
      title:'Senior Management',
      description:'Junior, Junior Adavanced, Semi Senior, Semisenior Advanced',
      open: false
    },
   ]);

  const toggleCards = index =>{
    setSeniority(seniority.map((card, i) =>{
      if (i === index){
        card.open = !card.open
      }else{
        card.open = false;
      }
      return card;
    }))
  }

  return (
    <div className="container">
      <h2>Career Path</h2>
      <img src={growingpath} alt="people-growing" className='image-size'/> 
      <div className="accordion">
      {seniority.map((card, i)=>(
        <Accordion card={card} index={i} toggleCards={toggleCards}/>
      ))}
      </div>
    </div>
  )
}

export default ThirdPage;