import React from 'react';
import Nav from './Nav/nav';
import Footer from './Footer/footer';


function Home() {
  return (
    <div className="container" >
      <div className="header">  
           <Nav />
      </div>
      <div className="section">
              <div className="container">
                     <h1> Ireporter </h1>
                    <p> iReporter is a small online platform that enables citizen </p>
                      <p> to raise a red flag on suspicious things or </p>
                      <p> ask for a government intervention on different matters in the community.</p>
              </div>
      </div> 
      <div className="footer">
      <Footer/>
      </div>
    </div>
  );
}

export default Home;