import React from 'react';
import { Link } from "react-router-dom";


function Nav() {
  return (
   
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" > 
        <div className="container">
          <h3>Ireporter App</h3>
            <ul className="navbar-nav ml-auto" >
              <li  className="nav-item">
                <Link className="nav-link active" to={"/Intervation"}>Ask for Intervation</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" to={"/Red-flag"}>Raise a Red_flag</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link active" to={"/Sign-in"}>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/Sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/About"}>About</Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </form>
        </div>
      </nav>  
       
  );
}

export default Nav;
  