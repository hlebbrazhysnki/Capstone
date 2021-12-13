import React, { useState, useEffect} from 'react'
import "../App.css";








function Navbar() {

    

    return (


       
        <div className="Navbar active">
            <div className="leftSide">
                <div className="rightSide">

                    <div className="Links">
                        <ul className=''>
                            <a href="/home" className='Text-white'>Home</a>
                            <a href="/attractions" className='Text-white'>Attractions</a>
                            <a href="/contact" className='Text-white'>Contact</a>
                            <a href="/about" className='Text-white'>About Us</a>

                        </ul>

                        
                    
                    </div>
                </div>
            </div>
        </div>
       

        
        
        
    )
}

export default Navbar
