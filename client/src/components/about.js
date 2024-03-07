import React from 'react';
import abtimg from '../images/LAST.webp'
import tickimage from '../images/tick2.webp';
import {Link} from 'react-router-dom'
function about(){
    return(
        <div id='about'>
            <div className='about-img'>
                <img src={abtimg} alt='' className='abtimg1' />
            </div>
            <div className='about-text'>
                <h1>WHY CHOOSE US</h1>
                <p> <img src={tickimage} alt="not found" /> OVER 230+ EXPERT COACHS</p>
                <p> <img src={tickimage} alt="not found" /> TRAIN FASTER AND BETTER THAN BEFORE</p>
                <p> <img src={tickimage} alt="not found" />1 FREE PROGRAM FOR NEW MEMBERS</p>
                <p> <img src={tickimage} alt="not found" /> RELIABLE PARTNER</p>
                <Link to="/Knowus">
                    <button>KNOW MORE</button>
                </Link>
                
            </div>
        </div>
    )
}

export default about;













