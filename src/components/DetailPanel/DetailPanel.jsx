import React from "react";
import "./DetailPanel.css"
import TaskForm from '../TaskForm/TaskForm'

const DetailPanel = ({cssprop, dispatchCSSState}) => {
    const hanldeCloseDetailOnClick = () => {
        dispatchCSSState({
            detailIsvisible: false,
            "toggleDisplay": {"display": "block"},
            cssProperties: {
                "--detail-width": "0", 
                "--master-width": "100%"
                }
            }
        )
    }
    return (
        <div className="detail-panel" style={cssprop}>
            <div className="detailform">
                <TaskForm></TaskForm>
            </div>
            <div className="footer">
                <button className="save-btn">Save</button>
                <button className="cancel-btn" onClick={hanldeCloseDetailOnClick}>Close</button>
            </div>
        </div>
    )
}

export default DetailPanel;
