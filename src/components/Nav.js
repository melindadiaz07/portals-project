import React from 'react';
import  { Redirect, useHistory, NavLink, useLocation} from 'react-router-dom'
import compass from  '../images/compass.png'

const Nav = (props) => {

  const location = useLocation()

  return(

    <div>
     <NavLink to="/map"  >
        <img src={compass} alt="compass icon" id="compass-icon" onClick={() => props.url(location.pathname)} />
    </NavLink> 
      
    </div>
  )
}

export default Nav;