import React, { useEffect } from 'react';
import ImageMap from 'image-map'
import sphinx from '../images/sphinx-front-view.jpg'


const Sphinx = (props) => {

  const resizeImgMap = () => {
    console.log("resize")
    ImageMap('img[usemap]')
    if (props.url !== "") {
      window.location.reload()
    }
  }



  useEffect(resizeImgMap, [])
  

  return(
    <div id="sphinx-container">
      <div id="sphinx-image-container">
        <div id="sphinx-overlay" >
          <area coords="202,175,247,245" shape="rect" href="/dream-stele"/>
        </div>
        <img src={sphinx} alt="Giza sphinx front view" id="sphinx-image" useMap="#image-map"/>
      </div>

      <map name="image-map">
          <area  alt="dream-stele" title="dream-stele" href="/dream-stele" coords="202,175,247,245" shape="rect"  onMouseOver={() => console.log("hover")} />
      </map>

      <p className="artifact-description" >The Dream Stele, also called the Sphinx Stele, is an epigraphic stele erected 
      between the front paws of the Great Sphinx of Giza by the ancient Egyptian pharaoh 
      Thutmose IV in the first year of the king's reign, 1401 BC, during the 18th Dynasty. 
      As was common with other New Kingdom rulers, the epigraph makes claim to a divine 
      legitimisation of kingship.
      </p>
    </div>

  )
}

export default Sphinx;