import React from "react";
import "./Card.css"

const Card = ({ height, children }) => {
    return(
        <div className="card">
            {children}
        </div>
    )
}

export default Card;