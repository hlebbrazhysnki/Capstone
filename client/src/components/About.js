import React from 'react'
import { Placeholder } from 'react-bootstrap'
import "../style.css";
import placeholder from '../imgs/placeholder.png'
import cincy2 from '../imgs/cincy2.png'


const About = () => {
    return (
        <div>
        <div className="body">
<div className="text-area">
        <h2 className="title center">About Us</h2>
        <h3 className="text-box t-box">Welcome to Queen City and welcome to the best Cincinnati guide!</h3>

        <img src={cincy2} alt="" className="about-right"/>
        
        <div className="big-text-box t-box">
        <h3>Cincinnati's Finest Guide:</h3>
        <hr />
        <p>Here, you can find all that you need when it comes to the culture, shops, sports, dining, parks, sights, and entertainment</p>
        </div>
        <div className="big-text-box t-box">
        <h3>What Is Cincinnati?:</h3>
        <hr />
        <p>Cincinnati is a city in the U.S. state of Ohio and the county seat of Hamilton County. Settled in 1788, the city is located at the northern side of the confluence of the Licking and Ohio rivers, the latter of which marks the state line with Kentucky.</p>
        </div>
</div>
<br />
<div className="videos">
        {/* Youtube video left */}
        <div id="video1">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/FfrurRPhJ54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p id='video-txt' className='t-box text-box'>Drone flyover footage of the city of Cincinnati. This video gives off the vibe of the city at different times so you can see how beautiful the city looks.</p></div>
        {/* Youtube video right */}
        <div id="video2">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/eg19iXclGXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p id='video-txt' className='t-box text-box'>Here is a video of reasons why you should move to Cincinnati. </p>
        
        </div>
</div>

        </div>
        </div>
    )
}

export default About
