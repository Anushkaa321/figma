import React from 'react';
import './Navbar.css'

function Navbar() {
    return ( 
        <div class='background'> 
        <img src='./media/Rectangle 9.png '/>

        <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="./media/Rectangle 2.png"/>
          </a>
          <ul class="nav ">
  <li class="nav-item">
    <a class="nav-link" style={{color:'#E4E6F2'}}  href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" style={{color:'#E4E6F2'}} href="#">Service</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" style={{color:'#E4E6F2'}} href="#">Process</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" style={{color:'#E4E6F2'}} href="#">Work</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" style={{color:'#E4E6F2'}} href="#">Pricing</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" style={{color:'#E4E6F2'}} href="#">FAQs</a>
  </li>
</ul>
  <button class='btn0'>
    <a>Book a call</a>
  </button>
        </div>
    
    </nav>
    </div>


     );
}

export default Navbar;