import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../Home/Footer/footer';


function Contact() {
  return (
    <div className="container">
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" > 
            <Link  className="nav-link active" to ={"/"}>Ireporter App</Link>
            <ul className="navbar-nav ml-auto">
                   <li className="nav-item"> 
                       <Link className="nav-link active" to={"/About"}>About</Link>
                    </li>
                    <li className="nav-item">
                         <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                          </form>
                    </li>
              </ul>
        </nav>  
      </div>
      <div className="section">
                <div >
                <h3>About Page</h3>
                   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin odio nec sem hendrerit, quis venenatis urna lacinia. Quisque pretium molestie magna, vulputate faucibus mi volutpat non. Proin mattis, justo vel varius auctor, tortor eros blandit metus, et lacinia magna nisl nec nisl. Ut euismod sapien diam, ut accumsan est porttitor ut. Aliquam nec lectus felis. Cras eu vehicula quam, vel vulputate nunc. Proin risus mi, placerat id massa at, lobortis imperdiet justo. Proin leo metus, finibus eget odio eu, malesuada pretium leo. Ut lacus nisi, dignissim ut ultrices eget, accumsan ac risus. Praesent euismod pellentesque metus, id 
                   tincidunt lectus molestie eu. Fusce eget leo quis elit interdum porttitor ullamcorper sed ante.</p>
                      <p>  Sed vitae ligula nec nulla sollicitudin elementum a vel justo. Aenean ultricies tristique erat, nec iaculis quam rhoncus ut. Mauris id augue cursus, vulputate arcu eget, interdum ipsum. Donec ac scelerisque augue. Proin mollis pharetra congue. Vestibulum vel suscipit neque. Nulla facilisi. In hac habitasse platea dictumst. Vestibulum ultrices ante eget enim pulvinar vulputate eu id nisl. Mauris nec tincidunt orci, 
                     id tempus nisi. Ut quis ipsum semper, mollis urna ut, ultricies enim. </p>
                </div>
       </div>
       <div className="footer">
         <Footer/>
       </div>
     </div>
  );
}

export default Contact;
