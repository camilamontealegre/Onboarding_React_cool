import React, { useState } from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import Values from './components/Values';
import Keypeople from './components/Keypeople';

function App() {
  const [userName, setName] = useState('');
  const [page, setPage] = useState(1);
  
  const nextPage = () => {
    setPage (page => page + 1);
  }

  const lastPage = () => {
    setPage (page => page - 1);
  }

  return (
    <div>
      { page === 1 && <FirstPage guardarNombre = {setName} goToSecondPage = {nextPage}/>}
      { page === 2 && <SecondPage Nombre = {userName} goToFirstPage = {lastPage} goToThirdPage = {nextPage}/>}
      { page === 3 && <ThirdPage  goToSecondPage = {lastPage} goToFourthPage = {nextPage}/>}
      { page === 4 && <FourthPage Nombre = {userName} goToThirdPage = {lastPage} goToFifthPage = {nextPage} />}
      { page === 5 && <Values goToFourthPage = {lastPage} goToSixthPage = {nextPage} /> }
      { page === 6 && <Keypeople goToFifthPage = {lastPage} /> }
    </div>
  );
}

export default App;
