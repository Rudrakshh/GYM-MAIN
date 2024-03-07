import React from 'react'
import Featurebox from './featurbox';
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'
import {Link} from 'react-router-dom'




function features(){
    return(
        <div id="features">
            <h1>FEATURES</h1>
            <div className='a-container'>
                <Link to="/weightlifting">
                <Featurebox image={fimage1} text="WEIGHT LIFTING" last="IN THIS PROGRAM YOU WILL BE TRAINED TO IMPROVE YOUR STRENGTH THROUGH VARIOUS EXCERSISES."/>
                </Link>
                
                <Featurebox image={fimage2} text="HEALTH FITNESS" last="this program is designes for those who excercises only for their body fitness." />
                <Featurebox image={fimage3} text="FAT BURNING" last="this program is suitable for you who wants to get rid of your fat and lose their weight" />
                <Featurebox image={fimage4} text="CARDIO" last="In this program, you are trained to do more sequential moves in range of 20 until 30 minutes." />
            </div>
        </div>
    )
}

export default features;