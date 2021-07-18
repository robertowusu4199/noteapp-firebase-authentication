import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
        <div className = 'container'>
          <div className = 'row'>
            <h3 style={{ marginLeft: "534px", color: "white" }}>Home</h3>
    
            <div className = 'col-md-6'>
              <h4><Link to = '/login'>Log In</Link></h4>
            </div>
            
            <div className = 'col-md-6'>
              <h4><Link to = '/signup'>Sign Up</Link></h4>
            </div>
             
          </div>
        </div>
  )
}

export default Home;