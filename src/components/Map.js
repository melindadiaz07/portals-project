import React from 'react';
import { NavLink } from 'react-router-dom'
import map from '../images/egyptmap.jpg'

const Map = () => {


  return(
    <div>
      <img src={map} alt="map of giza" id="map-image"/>

      <NavLink to="/abydos" id="abydos-link" className="map-link">
        <h3>Abydos</h3>
      </NavLink>
    </div>
  )
}

export default Map;