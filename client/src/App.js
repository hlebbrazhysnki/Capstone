import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Attractions from './components/Attractions';
import Padding from './components/Padding'
import Sights from './components/Sights'
import Nightlife from './components/Nightlife'
import Parks from './components/Parks'
import Food from './components/Food'
import Entertainment from './components/Entertainment'
import Shopping from './components/Shopping'
import Sports from './components/Sports'
import Sport from './components/Sport'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Padding />
        <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={About} />
        <Route path='/attractions' component={Attractions} />
        <Route path='/sights' component={Sights} />
        <Route path='/parks' component={Parks} />
        <Route path='/nightlife' component={Nightlife} />
        <Route path='/food' component={Food} />
        <Route path='/shopping' component={Shopping} />
        <Route path='/entertainment' component={Entertainment} />
        <Route path='/sports' component={Sports} />
        <Route path='/contact' component={ Contact } />
        <Route path='/sport' component={ Sport } />
       </Switch>
        <Footer/>
        
     </BrowserRouter>
    
     
    )
  }
}
export default App

