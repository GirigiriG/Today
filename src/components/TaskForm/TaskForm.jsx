/*
    name
    owner
    group
    status
    remainig hours
    estimated hours
    description
    last modified
    created date
    updated by
    created by
    project id
*/


import React from 'react'
import "./TaskForm.css"

const TaskForm = () => {
    return (
        <div className="taskform">
        <div className="col-left">
            <input type="text" placeholder="name"/>
            
        </div>
        <div className="col-right">
            <input type="text" placeholder="owner"/>
           <select>
               <option value="">Active</option>
               <option value="">Hold</option>
               <option value="">Completed</option>
           </select>
        </div>
        </div>
    )
}

export default TaskForm