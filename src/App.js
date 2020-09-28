import React, { useState } from 'react';
import FirstPage from './components/FirstPage';
//import SecondPage from './components/SecondPage';


function App(props) {
  const [userName, setName] = useState('')
  return (
    <div>
     <FirstPage nombre={userName} guardarNombre={setName}/>
    </div>
  );
}

export default App;
