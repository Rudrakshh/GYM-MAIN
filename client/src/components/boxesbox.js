import React from 'react';
import img1 from '../images/tick.png'

function boxesbox(props) {
    return(
        <div id='boxesbox'>
            <div className='boxes-title'>
                <h1>{props.title}</h1>
            </div>
            <div className='boxes-text'>
                <p>{props.text}</p>
            </div>
            <div className='last-text'>
                <h4><img src={img1} alt="not found"></img>{props.last1}</h4>
                <h4><img src={img1} alt="not found"></img>{props.last2}</h4>
                <h4><img src={img1} alt="not found"></img>{props.last3}</h4>
            </div>
        </div>
    )
}

export default boxesbox;