import React from 'react'
import "../style.css";
import placeholder from '../imgs/placeholder.png'

const Attractions = () => {
    return (
        <div>
<h2 className="center title">Attractions</h2>
<h3 className="topic">Category Here</h3>

<div className="content">
<div className="big-container">
<h2 className="header-txt">PLACEHOLDER</h2>
<img src={placeholder} alt="" />
</div>
<div className="card-buttons">
<div className="center">
<button className='btn btn-primary'>More Info</button>
<button className='btn btn-primary'>Website</button>
</div>
</div>
</div> 
<div className="content">
<div className="big-container">
<h2 className="header-txt">PLACEHOLDER</h2>
<img src={placeholder} alt="" />
</div>
<div className="card-buttons">
<div className="center">
<button className='btn btn-primary'>More Info</button>
<button className='btn btn-primary'>Website</button>
</div>
</div>
</div> 
<div className="content">
<div className="big-container">
<h2 className="header-txt">PLACEHOLDER</h2>
<img src={placeholder} alt="" />
</div>
<div className="card-buttons">
<div className="center">
<button className='btn btn-primary'>More Info</button>
<button className='btn btn-primary'>Website</button>
</div>
</div>
</div> 
        </div>
    )
}

export default Attractions
