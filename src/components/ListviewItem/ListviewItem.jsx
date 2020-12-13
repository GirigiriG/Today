import React from "react";
import "./ListviewItem.css"

const ListviewItem = ({dispatchToggleState, detail}) => {
   
    const handleToggleDispatch = () => { 

        // detail.cssProperties[""] = "55%" 
        let updatedState = {
            detailIsvisible: true,
            "toggleDisplay": {"display":"none"},
            cssProperties: {"--detail-width": "50%", "--master-width": "50%"}
        }
        dispatchToggleState(updatedState)
    }
    return (
        <div className="listviewitem" onClick={handleToggleDispatch} >
            <div>Create Application With React</div>
            <div style={detail.toggleDisplay}>17hrs</div>
            <div style={detail.toggleDisplay}>4hrs</div>
            <div style={detail.toggleDisplay}>Gideon G.</div>
            <div>In Progress</div>
        </div>
    )
}

export default ListviewItem