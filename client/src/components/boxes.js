import React from "react";
import Boxesbox from "./boxesbox";
function boxes(){
    return(
        <div id="boxes">
            <p>ARE YOU <span>READY</span></p>
            <div className="boxes-flex">
                <Boxesbox title="PRENIUM PLAN" text="$30" last1="5 HOURS OF EXCERCISE" last2="FREE CONSULTION OF COACHES" last3="ACCESS TO MINIBAR" />
                <Boxesbox title="BASIC PLAN" text="$15" last1="2 HOURS OF EXCERCISE" last2="FREE CONSULTION OF COACHES" last3="ACCESS TO THE COMMUNITY"/>
                <Boxesbox title="PRO PLAN" text="$60" last1="8 HOURS OF EXCERCISE" last2="CONSULTION OF PRIVATE COACHES" last3="FREE FITNESS MARCHANDISES" />
            </div>
            
            {/* <Boxesbox title="hello" text="ttttttttt"/> */}
        </div>
    )
}

export default boxes;