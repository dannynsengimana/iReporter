import React from 'react';
import { Link } from "react-router-dom";
 //import Footer from '.../Home/Footer/footer.js';


function Intervation_cancel() {
  return (
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
        <form>
           <h3>Intervation Cancel</h3>
            
         <div className="form-group">
                  <label>UserName</label>
                <input type="text" className="form-control" placeholder="Enter your full name" />
           </div>
           <div className="form-group">
                  <label>Intervation id</label>
                <input type="text" className="form-control" placeholder="Enter intervation record id" />
           </div>
                <div className="form-group">
                          <label>Why cancel the intervation</label>
                          <textarea className="form-control" id="intervation_repo" name="intervation_repo" rows="4" cols="50">Enter the reason for an Intervation</textarea>
                </div>

                <div className="btn-group btn-group-justified">
                   <div className="form-group">
                        <input type="submit" className="btn  btn-danger" value="Cancel intervation "/>
                   </div>
          </div>
      </form>
      </div>
     </div>
  );
}

export default Intervation_cancel;