import React from 'react';
import './App.css';
import About from './components/About/about';
import Contact from './components/Contact_us/contact';
import Home from './components/Home/Home'
import Record from './components/Record/Record';
import Intervation from './components/Record/Intervation/intervation';
import Intervation_cancel from './components/Record/Intervation/Intervation_cancel';
import Red_flag_cancel from './components/Record/Red_flag/Red_flag_cancel';
import Red_flag from './components/Record/Red_flag/red_flag';
import Sign_in from './components/Account/Sign_in/sign_in';
import Sign_up from './components/Account/Sign_up/sign_up';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

  <Router>

             <Switch>
                   <Route path="/About" component={About} /> 
                   <Route path="/Contact" component={Contact} /> 
                   <Route exact path='/' component={Home} />
                   <Route path="/Record" component={Record} />
                   <Route path="/Intervation" component={Intervation} />
                   <Route path="/Red-flag" component={Red_flag} />
                    <Route path="/Intervation-cancel" component={Intervation_cancel} />
                   <Route path="/Red-flag-cancel" component={Red_flag_cancel} />
                   <Route path='/Sign-up' component={Sign_up} />
                   <Route path="/Sign-in" component={Sign_in} />
              </Switch>
  </Router>

  );
}

export default App;
