import React, { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import './App.css'
import axios from 'axios'

import Signup from './containers/Signup'
import Users from './containers/Users'

window.axios = axios

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mike Fritzsche Design</h1>
        <h3>Forging ideas into reality</h3>
      </header>

      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>

      <div style={{ padding: 20 }}>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signup" component={Signup}/>
          <Route path="/users" component={Users}/>
        </Switch>
      </div>
    </div>
  )
}

export default App
