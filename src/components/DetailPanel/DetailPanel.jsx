import React, { useEffect } from "react";
import "./DetailPanel.css"
import TaskForm from '../TaskForm/TaskForm'

const DetailPanel = ({cssprop, dispatchCSSState, id}) => {
    const [task, setTask] = React.useState({})
    const loadData = async () => {
        const url = `http://localhost:3001/task/find/${id}`
        const resp = await fetch(url, {method: "GET"}).catch(() => console.error())
        const task = await resp.json();
        console.log(task)
        setTask(task);
    } 

     useEffect(() => {
         loadData()
    },[])

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
                <TaskForm 
                TaskName={task.TaskName}
                OwnerName={task.OwnerName}
                Status={task.Status}
                id={id}>
                </TaskForm>
            </div>
            <div className="footer">
                <button className="save-btn">Save</button>
                <button className="cancel-btn" onClick={hanldeCloseDetailOnClick}>Close</button>
            </div>
        </div>
    )
}

export default DetailPanel;
