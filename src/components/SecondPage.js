import React from 'react';
import './SecondPage.css'

function SecondPage(props) {
  const {goToThirdPage, goToFirstPage, Nombre } = props
  return (
    <div className="contenedor">
      <p className="first-paragraph"> <span className="glober">{ Nombre }</span> already belongs to a studio, has a seniority and probably already works on a specific project. To understand this better</p>
      <p className="emphasis">Let's imagine!</p>
      <p className="third-paragraph">First, we need to create our <span className="emphasis">fictional character!</span></p>
      <div className="buttons">
         <button onClick={goToFirstPage}>Previous</button>
         <button onClick={goToThirdPage}>Next</button>
      </div>
    </div>
  );
}

export default SecondPage;