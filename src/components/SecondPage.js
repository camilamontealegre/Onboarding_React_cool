import React from 'react';


function SecondPage(props) {
  const {Pagsiguiente, Paganterior, Nombre} = props
  return (
    <div>
     <p>Hola { Nombre } Bienvenido(a) a Globant.</p>
     <button onClick={Pagsiguiente}>Next</button>
     <button onClick={Paganterior}>Previous</button>
    </div>
  );
}

export default SecondPage;