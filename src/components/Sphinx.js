import React, { useEffect } from 'react';
import sphinx from '../images/sphinx-front-view.jpg'

const Sphinx = () => {


  return(
    <div id="sphinx-container">
      
      <img src={sphinx} alt="Giza sphinx front view" id="sphinx-image"/>

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