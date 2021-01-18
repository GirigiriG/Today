import React from 'react'
import "./TaskForm.css"
import Input from '../../components/InputCustom/input'
import Textarea from '../../components/CustomTextarea/customtextarea'

const TaskForm = ({id, TaskName, OwnerName, Status}) => {
    return (
        <div className="taskform">
            <div className="col-two">
                <div className="col-left">
                    <Input 
                    placeholdertext={"Task Name"}
                    name="Task Name"
                    required={true}
                    type="task">
                    </Input>

                    <Input 
                    placeholdertext={"Task Name"}
                    name="Estimate Hours"
                    type="task">
                    </Input>
                </div>
                <div className="col-right">
                    <Input 
                    placeholdertext={"John Doe"}
                    name="Owner"
                    type="app_user">
                    </Input>
                    <p className="status-label">Status</p>
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