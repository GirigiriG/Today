import React, { useEffect, useState } from 'react'
import "./TaskForm.css"
import Input from '../../components/InputCustom/input'
import Textarea from '../../components/CustomTextarea/customtextarea'

const TaskForm = ({record, id}) => {
    let [recordState, setRecord] = useState({})

    useEffect(() => {
        
    }, [])
   
    return (
        <div className="taskform">
            <div className="col-two">
                <div className="col-left">
                    <Input 
                    placeholdertext={"Task Name"}
                    label="Task Name"
                    record={record}
                    value={record.TaskName}
                    required={true}
                    type="task">
                    </Input>

                    <Input 
                    placeholdertext={"Task Name"}
                    value={record.Estimate}
                    name="Estimate Hours">
                    </Input>
                </div>
                <div className="col-right">
                    <Input 
                    placeholdertext={"John Doe"}
                    value={record.OwnerName}
                    label="Owner"
                    type="app_user">
                    </Input>

                    <Input 
                    placeholdertext={"Remaining hours"}
                    value={record.Remaining}
                    label="Remaining Hours">
                    </Input>

                    <p className="status-label">Status</p>
                    <select>
                        <option value="">{record.Status}</option>
                        <option value="">Hold</option>
                        <option value="">Closed</option>
                    </select>
                </div>
            </div>
            <div className="col-one" style={{'marginTop': 'auto', 'marginBottom': '0.5rem'}}>
                <Textarea name="Description"></Textarea>
            </div>
        </div>
    )
}

export default TaskForm