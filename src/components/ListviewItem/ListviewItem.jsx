import React from "react";
import "./ListviewItem.css"

const ListviewItem = ({dispatchToggleState, detail, title, estimate, remaining, ownerName, status, id}) => {
   
    const handleToggleDispatch = () => { 

        // detail.cssProperties[""] = "55%" 
        let updatedState = {
            detailIsvisible: true,
            id: id,
            "toggleDisplay": {"display":"none"},
            cssProperties: {"--detail-width": "50%", "--master-width": "50%"}
        }
        dispatchToggleState(updatedState)
    }

    return (
        <div className="listviewitem" onClick={handleToggleDispatch} >
            <div>{title}</div>
            <div style={detail.toggleDisplay}>{estimate}hrs</div>
            <div style={detail.toggleDisplay}>{remaining}hrs</div>
            <div style={detail.toggleDisplay}>{ownerName}</div>
            <div style={{textAlign: "center"}}>{status}</div>
        </div>
    )
}

export default ListviewItem