import React from 'react';
import './SecondPage.css';
import {useHistory} from 'react-router-dom';
import FooterButtons from './FooterButtons';

function SecondPage(props) {
  const { Nombre } = props
  const history = useHistory()
  return (
    <div className="esto-agrupa-todo">
      <p className="first-paragraph"> <span className="glober">{ Nombre }</span> already belongs to a studio, has a seniority and probably already works on a specific project. To understand this better</p>
      <p className="emphasis">Let's imagine!</p>
      <p className="third-paragraph">First, we need to create our <span className="emphasis">fictional character!</span></p>
      <FooterButtons 
        OnPrevious={()=>{
          history.push("/welcome")
          }}
        OnNext={()=>{
          history.push("/career")
         }}
      />
    </div>
  );
}

export default SecondPage;