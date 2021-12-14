import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import "./style.css";
import placeholder from './imgs/placeholder.png'
import Attractions from "./components/Attractions";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Padding from "./components/Padding";

// import Footer from './components/Footer'
// import FooterStyles from './components/FooterStyles'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Padding />
      <Switch>
      <Route exact path = "/" component ={Home } />
      <Route path = "/about" component ={About} />
      <Route path = "/contact" component ={Contact} />
      <Route path = "/attractions" component ={Attractions} />

    </Switch>
<Footer/>
    </div>
              
    </BrowserRouter>
  );
}

export default App;
