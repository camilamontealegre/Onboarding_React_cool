import React, { useState } from 'react';
import {Route, Switch, BrowserRouter as Router, Redirect}  from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import Values from './components/Values';
import KeyPeople from './components/KeyPeople';
import Ready from './components/Ready';
import FinalStep from './components/FinalStep';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userName, setName] = useState('');
  //const [page, setPage] = useState(1);
  
  // const nextPage = () => {
  //   setPage (page => page + 1);
  // }

  // const lastPage = () => {
  //   setPage (page => page - 1);
  //}

  // return (
  //   <div>
  //     { page === 1 && <FirstPage guardarNombre = {setName} goToSecondPage = {nextPage}/>}
  //     { page === 2 && <SecondPage Nombre = {userName} goToFirstPage = {lastPage} goToThirdPage = {nextPage}/>}
  //     { page === 3 && <ThirdPage  goToSecondPage = {lastPage} goToFourthPage = {nextPage}/>}
  //     { page === 4 && <FourthPage Nombre = {userName} goToThirdPage = {lastPage} goToFifthPage = {nextPage} />}
  //     { page === 5 && <Values goToFourthPage = {lastPage}  goToSixthPage = {nextPage}/> }
  //     { page === 6 && <KeyPeople/> }

  //   </div>
  // );

 return(
  <Router>
    <div>
      <Switch>
      <Route exact path="/welcome" render={()=><FirstPage guardarNombre = {setName}/>}/>
      <Route exact path="/letsimagine" render={()=><SecondPage Nombre = {userName} />} />
      <Route exact path="/third" component={ThirdPage}/> 
      <Route exact path="/triforce" render={()=><FourthPage Nombre = {userName}/>}/>
      <Route exact path="/values" component={Values}/>
      <Route exact path="/keypeople" component={KeyPeople}/>
      <Route exact path="/ready" component={Ready}/>
      <Route exact path="/carousel" component={FinalStep}/>
      <Route path="*" render={()=><Redirect to= "/welcome"/>}/>
      </Switch>
    </div>
  </Router>  
 )
}

export default App;
