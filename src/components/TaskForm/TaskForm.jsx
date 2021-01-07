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
            <p>Name</p>
            <input type="text"/>
            
        </div>
        <div className="col-right">
            <p>Owner</p>
            <input type="text"/>

            <p>Status</p>
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