import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import Nav from './components/Nav'
import Map from './components/Map'
import Abydos from './components/Abydos'

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />

      <Switch>

        <Route exact path="/" render={() => <Home />} />
          
        <Route exact path="/map" render={() => <Map />} />

        <Route exact path="/abydos" render={() => <Abydos />} />

      
      </Switch>

    

      </Router>
    </div>
  );
}

export default App;
