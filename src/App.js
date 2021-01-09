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

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />

      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>

        <Route exact path="/Map">
          <Map />
        </Route>

      
      </Switch>

    

      </Router>
    </div>
  );
}

export default App;
