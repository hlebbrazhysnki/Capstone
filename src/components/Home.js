import React from 'react'
import "../style.css";
import placeholder from '../imgs/placeholder.png'
import shopping from '../imgs/shopping.jpg'



const Home = () => {
    return (
        <div>
            <h2 className="center title">Attractions</h2>

<div className="categories center">
      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Food</h2>
        <a href="#"><img className="category-img" src={placeholder}/></a>
      </div>
      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Parks</h2>
        <a href="#"><img className="category-img" src={placeholder}/></a>
      </div>
      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Nightlife</h2>
        <a href="#"><img className="category-img" src={placeholder}/></a>
      </div>
      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Shopping</h2>
        <a href="#"><a href="#"><img className="category-img" src={placeholder}/></a></a>
      </div>
      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Entertainment</h2>
        <a href="#"><img className="category-img" src={placeholder}/></a>
      </div>
      <div className="container col-lg-4 col-md-3 col-sm-6 col-xs-4">
        <h2 className="category-title">Sights</h2>
        <a href="#"><img className="category-img" src={placeholder}/></a>
      </div>
</div>
        </div>
    )
}

export default Home

