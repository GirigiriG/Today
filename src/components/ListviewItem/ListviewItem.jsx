import React from "react";
import "./ListviewItem.css"

const ListviewItem = ({dispatchToggleState, detail, record}) => {
    const handleToggleDispatch = () => { 
        let updatedState = {
            detailIsvisible: true,
            record: record,
            "toggleDisplay": {"display":"none"},
            cssProperties: {"--detail-width": "50%", "--master-width": "50%"}
        }
        dispatchToggleState(updatedState)
    }

    return (
        <div className="listviewitem" onClick={handleToggleDispatch} >
            <div>{record.name}</div>
            <div style={detail.toggleDisplay}>{record.estimate}hrs</div>
            <div style={detail.toggleDisplay}>{record.remaining}hrs</div>
            <div style={detail.toggleDisplay}>{record.ownerName}</div>
            <div> {record.status}</div>
        </div>
    )
}

export default ListviewItem
