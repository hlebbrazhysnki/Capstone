import React, { useState, useEffect} from 'react'
import "../App.css";
import Home from './Home';
import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom"
import '../style.css'








function Navbar() {

    

    return (


       
        <div className="Navbar active">
            <div className="leftSide">
                <div className="rightSide">
<div className="lg-display">
                    <div className="Links">
                        <ul className=''>
                            <Link to='/' className='Text-white' target='_top'>Home</Link>
                            <Link to ="/attractions" className='Text-white' target='_top'>Attractions</Link>
                            <Link to ="/contact" className='Text-white' target='_top'>Contact</Link>
                            <Link to ="/about" className='Text-white' target='_top'>About Us</Link>
                            
                        </ul>
                        </div>
                    </div>


<div className="sm-display">
<i class="fas fa-bars"></i>                       
</div>  

                    
                </div>

              
            </div>

 
<div className="search-bar">
<input type="text" />
<button btn btn-primary> Go!</button>

</div>              
        </div>
       

        
        
        
    )
}

export default withRouter(Navbar)
