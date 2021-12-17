import React from 'react'
import { Link } from 'react-router-dom';

import "../App.css";

function Navbar() {
   
    return (

        
        <div className="Navbar">
            <div className="leftSide">
                <div className="rightSide">

                    <div className="Links">
                        <ul className=''>
                            <Link to="/" className='Text-white'>Home</Link>
                            <Link to="/" className='Text-white'>Attractions</Link>
                            <Link to="/contact" className='Text-white'>Contact</Link>
                            <Link to="/about" className='Text-white'>About Us</Link>
                            <Link to="/sport" className='Text-white'>Sports</Link>

                        </ul>

                        
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
