import React from "react";
import "./ListviewItem.css"

const ListviewItem = ({dispatchToggleState, detailState}) => {
   
    const handleToggleDispatch = () => { 

        // detailState.cssProperties[""] = "55%" 
        let updatedState = {
            detailIsvisible: true,
            cssProperties: {"--detail-width": "55%"}
        }
        dispatchToggleState(updatedState)
    }
    return (
        <div className="listviewitem" onClick={handleToggleDispatch} >
            <div>Create Application With React</div>
            <div></div>
            <div></div>
            {/* <div>Gideon G.</div> */}
            <div>In Progress</div>
        </div>
    )
}

export default ListviewItem