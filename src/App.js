import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from './components/About'
// import Contact from './components/Contact'
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path='/' component={ Home } />
        <Route path='/about' component={About} />
        {/* <Route path='/contact' component={ Contact } /> */}
       </Switch>
        <Footer/>
        
     </BrowserRouter>
    
     
    )
  }
}
export default App

