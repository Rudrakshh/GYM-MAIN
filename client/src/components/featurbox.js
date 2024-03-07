import React from 'react';

function featurebox(props) {
    return(
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt='/' />
            </div>
            <div className='a-b-text'>
                <h2>{props.text}</h2>
                <p>{props.last}</p>
            </div>
        </div>
    )
}
export default featurebox;