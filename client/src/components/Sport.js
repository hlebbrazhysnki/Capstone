import React from 'react'
import placeholder from '../imgs/placeholder.png'
import '../style.css'
import bengals from '../imgs/bengals.png'
import reds from '../imgs/reds.png'
import fc from '../imgs/fc.png'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { BACKEND_URL } from '../config'


const Sport = () => {
    return (
        <div>
            <h2 className="center title">Sports Teams</h2>

<div className="content">
<div className="big-container">
<h2 className="header-txt">Cincinnati Bengals</h2>
<img src={bengals} alt="" />
<p>The Cincinnati Bengals are a professional American football franchise based in Cincinnati. The Bengals compete in the National Football League (NFL) as a member club of the league's American Football Conference (AFC) North division. The club's home stadium is Paul Brown Stadium, located in downtown Cincinnati. Cincinnati's divisional opponents are the Baltimore Ravens, Cleveland Browns and Pittsburgh Steelers.</p>
</div>
<div className="card-buttons">
<div className="center">

<a href="">
<button className='btn btn-primary' >Website</button>
</a>

</div>
</div>
</div>

<div className="content">
<div className="big-container">
<h2 className="header-txt">Cincinnati Reds</h2>
<img src={reds} alt="" />
<p>The Cincinnati Reds are an American professional baseball team based in Cincinnati. The Reds compete in Major League Baseball (MLB) as a member club of the National League (NL) Central division, and were a charter member of the American Association in 1881 before joining the NL in 1890.</p>
</div>
<div className="card-buttons">
<div className="center">

<a href="">
<button className='btn btn-primary' >Website</button>
</a>

</div>
</div>
</div>

<div className="content">
<div className="big-container">
<h2 className="header-txt">FC Cincinnati</h2>
<img src={fc} alt="" />
<p>Football Club Cincinnati, commonly known as FC Cincinnati, is an American professional soccer club based in Cincinnati. The club plays in the Eastern Conference of Major League Soccer (MLS).</p>
</div>
<div className="card-buttons">
<div className="center">

<Link>
<button className='btn btn-primary' >Website</button>
</Link>

</div>
</div>
</div>


        </div>
    )
}

export default Sport
