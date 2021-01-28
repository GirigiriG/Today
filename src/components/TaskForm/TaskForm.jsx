import React, { useEffect } from 'react'
import "./TaskForm.css"
import Input from '../../components/InputCustom/input'
import Textarea from '../../components/CustomTextarea/customtextarea'

const TaskForm = ({record, id}) => {
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
                    value={record.name}
                    required={true}
                    type="task">
                    </Input>

                    <Input 
                    placeholdertext={"Task Name"}
                    value={record.estimate}
                    name="Estimate Hours">
                    </Input>
                </div>
                <div className="col-right">
                    <Input 
                    placeholdertext={"John Doe"}
                    value={record.ownerName}
                    label="Owner"
                    type="app_user">
                    </Input>

                    <Input 
                    placeholdertext={"Remaining hours"}
                    value={record.remaining}
                    label="Remaining Hours">
                    </Input>

                    <p className="status-label">Status</p>
                    <select>
                        <option value="">{record.status}</option>
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