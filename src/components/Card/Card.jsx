import React from "react";
import "./Card.css"

const Card = ({ height, children }) => {
    return(
        <div className="card" style={{height: height}}>
            {children}
        </div>
    )
}

export default Card;