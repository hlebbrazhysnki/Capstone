import React from 'react'
import { Placeholder } from 'react-bootstrap'
import "../style.css";
import placeholder from '../imgs/placeholder.png'

const About = () => {
    return (
        <div>
        <div>
<div className="text-area">
        <h2 className="title center">About Us</h2>
        <h3 className="text-box">Welcome to Queen City. The best Cincinnati guide</h3>
        <img src={placeholder} alt="" className="about-right"/>

        <div className="big-text-box t-box">
        <h3>Cincinnati's Finest Guide:</h3>
        <hr />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit harum nisi vero perferendis quam consectetur sequi fugiat iusto pariatur voluptas nostrum architecto quasi saepe at accusantium nihil sunt, porro adipisci.</p>
        </div>
        <div className="big-text-box t-box">
        <h3>What Is Cincinnati?:</h3>
        <hr />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit harum nisi vero perferendis quam consectetur sequi fugiat iusto pariatur voluptas nostrum architecto quasi saepe at accusantium nihil sunt, porro adipisci.</p>
        </div>
</div>
<br />
<div className="videos">
        {/* Youtube video left */}
        <div id="video1">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/99k-EAMBuM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p id='video-txt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, aspernatur et? Quidem corrupti voluptas non quasi perferendis vero laudantium facere harum accusantium veritatis. Expedita ullam aspernatur magnam odit iusto consequuntur animi, ad, eum dolor repellendus facilis doloremque delectus id ut!</p></div>
        {/* Youtube video right */}
        <div id="video2">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/99k-EAMBuM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p id='video-txt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, aspernatur et? Quidem corrupti voluptas non quasi perferendis vero laudantium facere harum accusantium veritatis. Expedita ullam aspernatur magnam odit iusto consequuntur animi, ad, eum dolor repellendus facilis doloremque delectus id ut!</p>
        
        </div>
</div>

        </div>
        </div>
    )
}

export default About
