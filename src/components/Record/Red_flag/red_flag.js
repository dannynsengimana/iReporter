import React from 'react';
import { Link } from "react-router-dom";
 //import Footer from '.../Home/Footer/footer';

function Red_flag() {
  return (
   <div>
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
              <h3>Red_flag record</h3>
                 <div className="form-group">
                      <label>User Name</label>
                      <input type="text" className="form-control" placeholder="Enter your User name" />
                 </div>
                 <div className="form-group">
                    <label>User Password</label>
                    <input type="password" className="form-control" placeholder="Renter your password to confirm" />
                </div>
                 <div className="form-group">
                      <label>why a Red_flag</label>
                       <textarea id="redflag_repo" className="form-control" name="redflag_repo" rows="4" cols="50">Enter the reason for an red_flag</textarea>
                  </div>
      
                  <div className="form-group"> 
                       <label>Upload image </label>
                      <input className="form-control" type="file" class="filestyle" data-icon="false"/>
                  </div>

                 <div className="form-group">
                              <button  className="form-control btn btn-outline-info">Show my location</button><br/>
                              <p id = "status"></p>
                              <a id = "map-link" target="_blank"></a>
                 </div>
                 <div className="btn-group btn-group-justified">
                     <div class="form-group">
                           <input type="submit" className="form-control btn  btn-success" value="Create Record"/>
                      </div>
                  </div>
              </form>
          </div>
     </div>
  );
  }
 export default Red_flag;
 