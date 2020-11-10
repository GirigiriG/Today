import React from "react";
import "./ListviewItem.css"

const ListviewItem = ({dispatchToggleState, detailState}) => {
   
    const handleToggleDispatch = () => { 

        // detailState.cssProperties[""] = "55%" 
        let updatedState = {
            detailIsvisible: true,
            "display": "none",
            cssProperties: {"--detail-width": "60%", "--master-width": "40%"}
        }
        dispatchToggleState(updatedState)
    }
    return (
        <div className="listviewitem" onClick={handleToggleDispatch} >
            <div>Create Application With React</div>
            <div style={{display: detailState.display}}>17hrs</div>
            <div style={{display: detailState.display}}>4hrs</div>
            <div style={{display: detailState.display}}>Gideon G.</div>
            <div>In Progress</div>
        </div>
    )
}

export default ListviewItem