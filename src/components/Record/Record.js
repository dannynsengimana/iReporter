import React from 'react';
import { Link } from "react-router-dom";
//import Footer from '../Home/Footer/footer';

function Record(){

    return(

  <div className="container">
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" > 
            <h4>Ireporter App</h4>
            <ul className="navbar-nav ml-auto">
                  <li className="nav-item" >
                          <Link  className="btn btn-light" to ={"/"}>Log out </Link>
                 </li>            
            </ul>
        </nav>  
      </div>
      <div className="section">
               <ul className="navbar-nav ml-auto">
                   <li  className="nav-item"> 
                    <Link className="nav-link active" to={"Intervation"}>Ask for Intervation</Link>
                  </li>
                  <li className="nav-item" >
                    <Link className="nav-link active" to={"/Red-flag"}>Raise a Red_flag</Link>
                  </li>
                  <li  className="nav-item"> 
                    <Link className="nav-link active" to={"Intervation-cancel"}>Cancel Intervation</Link>
                  </li>
                  <li className="nav-item" >
                    <Link className="nav-link active" to={"/Red-flag-cancel"}>Cancel Red_flag</Link>
                  </li>
                </ul>
      </div>
    </div>
    );
}
export default Record;