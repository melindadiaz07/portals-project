import React, { useState, useEffect } from 'react';
import ImageMap from 'image-map'
import archway from '../images/temp-archway.png'


const Home = () => {

  const [destination, setDestination] = useState("null")


  const portalClick = (e) => {
    e.preventDefault()
    setDestination(e.target.title)
  }

  const updateDestDisplay = () => {
    console.log(destination)
  }
  const resizeImgMap = () => {
    ImageMap('img[usemap]')
  }

  useEffect(updateDestDisplay, [destination])

  useEffect(resizeImgMap, [])

  

  return(
  <div>
    <img src={archway} alt="archway" useMap="#image-map" id="archway" />


   
    <map name="image-map">
        <area  alt="pyramid" title="pyramid" href="pyramid" coords="239,345,75" shape="circle" onClick={(e) => portalClick(e)}/>
        <area  alt="desert" title="desert" href="desert" coords="557,86,59" shape="circle" onClick={(e) => portalClick(e)}/>
        <area  alt="forest" title="forest" href="forest" coords="868,348,80" shape="circle" onClick={(e) => portalClick(e)}/>
    </map>

    <script>ImageMap('img[usemap]')</script>


    
  </div>

  )
}

export default Home;