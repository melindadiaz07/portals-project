import React, { useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import map from '../images/giza1.jpg'
import ImageMap from 'image-map'



const Map = (props) => {


  const resizeImgMap = () => {
    console.log("resize")
    ImageMap('img[usemap]')
    if (props.url !== "") {
      window.location.reload()
    }
  }

  useEffect(resizeImgMap, [])
  

  return(
    <div>
      
      <img src={map} alt="map of giza" id="map-image" useMap="#image-map"/>

      <map name="image-map">
          <area  href="menkaure" alt="menkaure" title="menkaure" coords="68,411,117,454" shape="rect" />
          <area  href="khafre" alt="khafre" title="khafre" coords="145,225,242,316" shape="rect" />
          <area  href="khufu" alt="khufu" title="khufu" coords="286,72,389,164" shape="rect" />
          <area  href="sphinx" alt="sphinx" title="sphinx" coords="456,284,491,289,525,299,527,316,520,334,502,335,501,322,454,321" shape="poly" />
      </map>

    </div>
  )
}

export default Map;