import React from 'react';

var reviewStyle = {
    color:'red',
    fontSize:'9px',
    border:'1px solid #fff',
    padding:'2px'
}

var item = (props) => {
    return(
        <div className="item">
            <h1>{props.id}</h1>
            <h3>{props.title}</h3>
            <p className="price">$ <span>{props.price}</span></p>
            <p style={reviewStyle}>{props.review}</p>
            <input type="text" placeholder="drop review"  onChange={props.reviewHandler} />
            <button onClick={props.addToCart}>Add to Cart</button>
            <button onClick={props.deleteClicked}>Remove</button>
        </div>
    )
}


export default item;

