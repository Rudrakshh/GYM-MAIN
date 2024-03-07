import React from "react";
import {Link as Scrollink} from 'react-scroll'

function header(){
    return(
        <div id="main">
            <div className="name">
                <h2>WE GO</h2>
                <h1><span>GYM</span></h1>
                <p className="details">WHEN LIFE GIVES YOU PAIN, GO TO <span>GYM</span></p>
                <div className="header-btns">
                <Scrollink to="contact" smooth={true} duration={1000}>
                <a href="#" className="header-btn">JOIN US</a>
                </Scrollink>
               
                </div>
                
            </div>
        </div>

    )
}

export default  header;