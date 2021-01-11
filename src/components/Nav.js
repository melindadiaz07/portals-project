import React from 'react';
import  { Redirect, useHistory, NavLink } from 'react-router-dom'
import compass from  '../images/compass.png'

const Nav = () => {


  return(

    <div>
     <NavLink to="/map" >
        <img src={compass} alt="compass icon" id="compass-icon" />
    </NavLink> 
      
    </div>
  )
}

export default Nav;