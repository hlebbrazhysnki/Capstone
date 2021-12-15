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
                            <Link to="/attractions" className='Text-white'>Attractions</Link>
                            <Link to="/contact" className='Text-white'>Contact</Link>
                            <Link to="/about" className='Text-white'>About Us</Link>
                            <Link to="/sports" className='Text-white'>About Us</Link>

                        </ul>

                        
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
