import React from 'react';
import './SecondPage.css'

function SecondPage(props) {
  const { goToSecondPage, goToFirstPage, Nombre } = props
  return (
    <div className="container">
      <p> <span className="glober">{ Nombre }</span> already belongs to a studio, has a seniority and probably already works on a specific project. To understand this better</p>
      <p className="emphasis">Let's imagine!</p>
      <p>First, we need to create our <span className="emphasis">fictional character!</span></p>
      <div className="buttons">
        <button onClick={goToSecondPage}>Next</button>
        <button onClick={goToFirstPage}>Previous</button>
      </div>
    </div>
  );
}

export default SecondPage;