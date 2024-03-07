import React from 'react';
import {Link as Scrollink} from 'react-scroll'
function offer(){
    return(
        <div id='presentaion'>
            <div className='pr-heading'>
                <h1>BIG <span>OFFER</span>GOING ON</h1>
                <p className='details'>20% OFF ON EVERY PLAN TILL JANUARY 2023</p>
                <div className='pr-btns'>
                <Scrollink to="contact" smooth={true} duration={1000}>
                    <a href='#' className='pr-btn'>JOIN NOW</a>
                    </Scrollink>
                </div>
            </div>
        </div>
    )
}
export default offer;