import React from 'react';
import { Link } from "react-router-dom";
 //import Footer from '.../Home/Footer/footer.js';


function Red_flag_cancel() {
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
           <h3>Cancel Red flag</h3>
            
         <div className="form-group">
                  <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" />
           </div>
           <div className="form-group">
                  <label> Record Id</label>
                <input type="text" className="form-control" placeholder="Enter the red flag record id" />
           </div>
           <div className="form-group">
                          <label>Why cancel the raised red flag</label>
                          <textarea className="form-control" id="intervation_repo" name="intervation_repo" rows="4" cols="50">Enter the reason for an Intervation</textarea>
                </div>
                <div className="btn-group btn-group-justified">
                   <div className="form-group">
                        <input type="submit" className="btn  btn-danger" value="Delete Red Flag Record"/>
                   </div>
          </div>
      </form>
      </div>
     </div>
  );
}

export default Red_flag_cancel;