import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";


class Sign_up extends Component {

    submitForm (e) {
        e.preventDefault()
        this.props.history.push('/Sign-in');
      }
  render(){
      return(
          <div className="container">
              <div className="header">
                  <nav className="navbar navbar-expand-lg navbar-light fixed-top" > 
                      <Link  className="nav-link active" to ={"/"}>Ireporter App</Link>
                      <ul className="navbar-nav ml-auto">
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
                    <form  onSubmit={this.submitForm.bind(this)}>
                           <h3>Sign up</h3>
                           <div className="form-group">
                                <label>Full Name</label>
                                 <input type="text" className="form-control" placeholder="Enter your full name" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            </div>
                             <div className="form-group">
                                <label>User Email </label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                 <label>Password</label>
                                 <input type="password" className="form-control" placeholder="Enter password" />
                            </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                                <p className="forgot-password text-right">
                                  Already registered <a href="#">sign in?</a>
                                 </p>
                    </form>
                </div>
            </div>
 );
}
}
export default withRouter(Sign_up);