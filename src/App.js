import React from 'react';
import './App.css';
import About from './components/About/about';
import Home from './components/Home/Home'
import Intervation from './components/Intervation/intervation';
import Nav from './components/Nav/nav';
import Red_flag from './components/Red_flag/red_flag';
import Sign_in from './components/Sign_in/sign_in';
import Sign_up from './components/Sign_up/sign_up';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

  <Router>
   <div className="App"> 
      <header>       
           <Nav />
      </header> 
       <Switch>
            <Route path="/About" component={About} /> 
            <Route exact path='/' component={Home} />
            <div className="auth-wrapper">
                <div className="auth-inner">
                  <Route path="/Intervation" component={Intervation} />
                  <Route path="/Red-flag" component={Red_flag} />
                  <Route path='/Sign-up' component={Sign_up} />
                  <Route path="/Sign-in" component={Sign_in} />
               </div>
            </div>
           </Switch>
          </div>
      </Router>

  );
}

export default App;
