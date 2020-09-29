import React from 'react';


function SecondPage(props) {
  const { goToSecondPage, goToFirstPage, Nombre } = props
  return (
    <div>
     <p>Hola { Nombre } Bienvenido(a) a Globant.</p>
     <button onClick={goToSecondPage}>Next</button>
     <button onClick={goToFirstPage}>Previous</button>
    </div>
  );
}

export default SecondPage;