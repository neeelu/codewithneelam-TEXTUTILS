//import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{ useState } from 'react';
// import About from './components/About';
// import {
// BrowserRouter as Router,
// Switch,
// Route,
// Link
// } from "react-router-dom";


const  App=() =>{
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState('light'); 
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0a0449';
  }else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  } 
  return (
    <>



<div className="container my-3">
{/* <Router> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert="This is alert"/>
{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
        
          {/* <Route exact path="/"> */}
          <TextForm heading="Enter the text to analyse" mode={mode}/>
          {/* </Route>
        </Switch>
     
    </Router> */}
          

          
       
</div>

    </>
  
  );
}

export default App;
