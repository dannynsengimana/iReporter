import React from 'react';
import { Link } from "react-router-dom";
   
   
function Footer() {
    return(
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-md-6">
                <h6> Ireporter-app </h6>
                <hr className="light"></hr>
                <ul className="navbar-nav ml-auto">
                      <li  className="nav-item"> 
                           <Link className="nav-link active" to={"/About"}>About us</Link>
                      </li>
                      <li className="nav-item" >
                           <Link className="nav-link active" to={"/Contact"}>Contact Us</Link>
                       </li>
                 </ul>
            </div>
            <div className="col-md-6">
              <h6>Parteners</h6>
              <hr className="light"></hr>
              <ul className="list-unstyled">
                <li>Rwanda National Police</li>
                <li>Ministry of Justice</li>
                <li>Ministry of Healthy</li>
              </ul>
            </div>
            <div className="col-12">
              <hr className="light"></hr>
              <h6> &copy;Ireporter by Snow Techno</h6>
            </div>
          </div>
        </div>
    );
}

export default Footer;