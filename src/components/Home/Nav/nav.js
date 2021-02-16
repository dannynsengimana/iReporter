import React from 'react';
import { Link } from "react-router-dom";


function Nav() {
  return (
   
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" > 
        <div className="container">
        <form class="form-inline my-2 my-lg-0">
               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </form>
            <ul className="navbar-nav ml-auto" >
              <li className="nav-item">
                <Link  className="nav-link active" to={"/Sign-in"}>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/Sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
      </nav>  
       
  );
}

export default Nav;
  