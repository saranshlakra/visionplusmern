import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Signin from "./components/Signin";
import Visiontest from "./components/Visiontest";
import Hearingtest from "./components/Hearingtest"
import Signup from './components/signup';
import Abouteyes from './components/Abouteyes';
import TestPage from './components/TestPage';
import {Route} from "react-router-dom";
import app from "./components/bookiappointment";
import Doclist from "./components/doclist";

function App() {
  return (
    <>
    <Navbar />
  
    <Route exact path='/'>
      <Home />
    </Route>

    <Route path='/Signup'>
      <Signup /> 
    </Route>

    <Route path='/Signin'>
      <Signin /> 
    </Route>

    <Route path='/Visiontest'>
      <Visiontest /> 
    </Route>

    <Route path='/Hearingtest'>
      <Hearingtest /> 
    </Route>

    <Route path='/Abouteyes'>
      <Abouteyes /> 
    </Route>

    <Route path='/TestPage'>
      <TestPage /> 
      {/* <app /> */}
    </Route>
    
    <Route path='/Doclist'>
      <Doclist /> 
      {/* <app /> */}
    </Route>
    
    </>
     
    
  );
}

export default App;
