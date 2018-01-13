import React from 'react';

var CharComponent = (props) => {

    var charStyle = {
        display:'inline-block',
        padding:'16px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid #000',
        backgroundColor:'#f4cf0c',
        color:'#000'
    }

    return(
        <div style={charStyle} onClick={props.removeItem}>
            {props.character}
        </div>
    )
}

export default CharComponent;