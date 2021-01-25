import React, {useState } from "react";
import "./DetailPanel.css"
import TaskForm from '../TaskForm/TaskForm'

const DetailPanel = ({cssprop, dispatchCSSState, id, record}) => {
    const [task, ] = useState(record)
   
    const hanldeCloseDetailOnClick = () => {
       
        dispatchCSSState({
            detailIsvisible: false,
            record: task,
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
                <TaskForm 
                record={record}
                id={id}>
                </TaskForm>
            </div>
            <div className="footer">
                <button className="save-btn">Save</button>
                <button 
                className="cancel-btn" 
                onClick={hanldeCloseDetailOnClick}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default DetailPanel;
