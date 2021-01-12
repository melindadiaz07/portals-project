import './App.css';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  withRouter,
  useLocation

} from "react-router-dom";
import Home from './components/Home'
import Nav from './components/Nav'
import Map from './components/Map'
import Abydos from './components/Abydos'
import Sphinx from './components/Sphinx'
import Khafre from './components/Khafre'
import Khufu from './components/Khufu'
import Menkaure from './components/Menkaure'


const  App = () => {


  const [url, setUrl] = useState("")


  return (
    <div className="App">

        <Nav url={setUrl}/>

      <Switch>

        <Route exact path="/" render={() => <Home />} />
          
        <Route exact path="/map" render={() => <Map url={url}/>} />

        <Route exact path="/sphinx" render={() => <Sphinx />} />

        <Route exact path="/khafre" render={() => <Khafre />} />

        <Route exact path="/khufu" render={() => <Khufu />} />

        <Route exact path="/menkaure" render={() => <Menkaure />} />

      </Switch>

    
    </div>
  );
}

export default withRouter(App);
