import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import "./styles/bulma.css"
import './styles/App.css'

import PageLogo from "./media/logo.png"

import Home from "./views/Home.js"
import Player from "./views/Player.js"
import Map from "./views/Map.js"

function App() {
  return (
    <div className="MainPage">
      <Router>
        <nav className="Navbar">
          <Link to="/" style={{margin: "auto auto auto 10px"}}><img src={PageLogo} alt="osu! Score Stalker" /></Link>
          <Link className="NavLink" to="/player">player</Link>
          <Link className="NavLink" to="/map">map</Link>
        </nav>

        <div id="GrandContainer">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/player" component={Player} />
            <Route path="/map" component={Map} />
          </Switch>
        </div>

        <div id="Copyright">
          <a href="osu.ppy.sh">osu! logo and styling © ppy 2007-2020</a>
        </div>
      </Router>
    </div>
  )
}

export default App
