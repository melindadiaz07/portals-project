import React from 'react';
import archway from '../images/temp-archway.png'


const Home = () => {

  return(
  <div>
    <img src={archway} alt="archway" usemap="#image-map"/>


   
    <map name="image-map">
        <area target="_self" alt="pyramid" title="pyramid" href="pyramid" coords="239,345,75" shape="circle" />
        <area target="_self" alt="desert" title="desert" href="desert" coords="557,86,59" shape="circle" />
        <area target="_self" alt="forest" title="forest" href="forest" coords="868,348,80" shape="circle" />
    </map>
  </div>

  )
}

export default Home;