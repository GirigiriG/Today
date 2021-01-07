import React from 'react'
import "./TaskForm.css"

const TaskForm = ({id, TaskName, OwnerName, Status}) => {
    return (
        <div className="taskform">
        <div className="col-left">
            <p>Name</p>
            <input type="text" value={TaskName}/>
            
        </div>
        <div className="col-right">
            <p>Owner</p>
            <input type="text" value={OwnerName}/>

            <p>Status</p>
           <select>
               <option value="">{Status}</option>
               <option value="">Hold</option>
               <option value="">Closed</option>
           </select>
        </div>
        </div>
    )
}

export default TaskForm