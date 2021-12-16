import React from 'react'
import "../style.css";
import placeholder from '../imgs/placeholder.png'
import shop from '../imgs/shop.png'
import sights from '../imgs/sights.png'
import food from '../imgs/food.png'
import arcade from '../imgs/arcade.png'
import club from '../imgs/club.png'
import park from '../imgs/park.png'
import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom"





const Home = () => {
    return (
        <div>
            <h2 className="center title">Welcome to Cincinnati!</h2>

<div className="categories center">
      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Food</h2>
        <Link to='/attractions'> <img className="category-img" src={food}/></Link>
      </div>

      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Parks</h2>
        <Link to='/attractions'><img className="category-img" src={park}/></Link>
      </div>

      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Nightlife</h2>
        <Link to='/attractions'><img className="category-img"  src={club}/></Link>
      </div>

      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Shopping</h2>
        <Link to='/attractions'><img id='shop' className="category-img" src={shop}/></Link>
      </div>

      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Entertainment</h2>
        <Link to='/attractions'><img className="category-img" src={arcade}/></Link>
      </div>

      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Sights</h2>
        <Link to='/sights'><img className="category-img" src={sights}/></Link>
      </div>

</div>
        </div>
    )
}

export default Home

