import React from 'react';
import { Link } from "react-router-dom";


function Nav() {
  return (
   
      <nav > 
        <div className="container">
            <ul >
              <li>
                <Link  to={"/Intervation"}>Ask for Intervation</Link>
              </li>
              <li >
                <Link to={"/Red-flag"}>Raise a Red_flag</Link>
              </li>
              <li>
                <Link to={"/Sign-in"}>Sign In</Link>
              </li>
              <li>
                <Link to={"/Sign-up"}>Sign up</Link>
              </li>
              <li>
                <Link to={"/About"}>About</Link>
              </li>
            </ul>
        </div>
      </nav>  
       
  );
}

export default Nav;
  