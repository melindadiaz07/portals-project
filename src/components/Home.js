import React, { useState, useEffect } from 'react';
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

  useEffect(updateDestDisplay, [destination])



  return(
  <div>
    <img src={archway} alt="archway" useMap="#image-map"/>


   
    <map name="image-map">
        <area  alt="pyramid" title="pyramid" href="pyramid" coords="239,345,75" shape="circle" onClick={(e) => portalClick(e)}/>
        <area  alt="desert" title="desert" href="desert" coords="557,86,59" shape="circle" onClick={(e) => portalClick(e)}/>
        <area  alt="forest" title="forest" href="forest" coords="868,348,80" shape="circle" onClick={(e) => portalClick(e)}/>
    </map>


    
  </div>

  )
}

export default Home;