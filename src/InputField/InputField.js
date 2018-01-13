import React from 'react';

var inputField = (props) => {
    return(
        <div>
            <input type="text" onChange={props.textHandler} value={props.currentValue} />
        </div>
    )
}

export default inputField;