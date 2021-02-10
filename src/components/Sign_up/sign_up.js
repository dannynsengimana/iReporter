import React from 'react';
//import './App.css';

function Sign_up() {
  return (
    <form>
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
        <label>Email address</label>
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
 );
}

export default Sign_up;