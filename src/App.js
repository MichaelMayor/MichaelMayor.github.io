import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Bio from './Pages/Bio.js'
import Portfolio from './Pages/Portfolio.js'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App () {
  return <div>
      <HashRouter>
          <Switch>
              <Route exact path="/">
                  <Header page="Bio" />
                  <Bio />
              </Route>
              <Route path="/Portfolio">
                  <Header page="Portfolio" />
                  <Portfolio />
              </Route>
          </Switch>
      </HashRouter>
      <Footer />
  </div>
}

export default App
