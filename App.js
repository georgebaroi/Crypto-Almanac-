import React from 'react'
import './App.css';
import Search from './Search';
import Nav from './nav';
import Routes from './routes';
import RoutesContainer from './routes-container';

function App() {
  

  return(
  <div className='App'>
  <header className='App-header'>
    
   <Nav/>
   <Routes/>
   <Search  /> 
  </header> 
  <body>
    <RoutesContainer/>
  </body>
  </div>
)}

export default App;

  
 

