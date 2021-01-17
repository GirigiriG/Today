import React from 'react'
import "./TaskForm.css"
import Input from '../../components/InputCustom/input'
import Textarea from '../../components/CustomTextarea/customtextarea'

const TaskForm = ({id, TaskName, OwnerName, Status}) => {
    return (
        <div className="taskform">
            <div className="col-two">
                <div className="col-left">
                    <p>Task Name</p>
                    <Input 
                    placeholdertext={"Task Name"}
                    type="task">
                    </Input>
                </div>
                <div className="col-right">
                    <p>Owner</p>
                    <Input 
                    placeholdertext={"John Doe"}
                    type="app_user">
                    </Input>
                    <p>Status</p>
                    <select>
                        <option value="">{Status}</option>
                        <option value="">Hold</option>
                        <option value="">Closed</option>
                    </select>
                </div>
            </div>
            <div className="col-one">
                <Textarea name="Description"></Textarea>
            </div>
        </div>
    )
}

export default TaskForm