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
            <div>{record.TaskName}</div>
            <div style={detail.toggleDisplay}>{record.Estimate}hrs</div>
            <div style={detail.toggleDisplay}>{record.Remaining}hrs</div>
            <div style={detail.toggleDisplay}>{record.OwnerName}</div>
            <div> {record.Status}</div>
        </div>
    )
}

export default ListviewItem
