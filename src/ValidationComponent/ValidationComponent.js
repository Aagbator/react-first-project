import React from 'react';

var ValidationComponent = (props) => {
    const divClasses = ["bold"];
    if(props.textLength > 5){divClasses.push("green")}else{divClasses.push("red")}

    return(

        <div>
        {
            (props.textLength > 0)?
            (props.textLength > 5)?<p className={divClasses.join(" ")}>Text long enough</p>:<p className={divClasses.join(" ")}>Text too short</p>
            :null
        }
        </div>
    )
}

export default ValidationComponent;