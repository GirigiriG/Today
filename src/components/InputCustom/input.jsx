import "./input.css"
import React, {useState } from "react";
import  SearchItem from "../../components/SearchItem/SearchItem";
import {TaskIcon, UserIcon, CloseIcon} from "../../asset/asset"

const Input = ({type, name, required}) => {
    const [tasks, setTasks] = useState([])
    const [isReadOnly, setReadOnly] = useState(false)
    const [recordName, setRecordName] = useState("")
    
    const handleOnChange = async (event) => {
        let recordName = event.target.value.replace(" ", encodeURIComponent('+'));
        
        if(recordName.length >= 3 && recordName != null) {
            const url = `http://localhost:3001/get/record/?name=${recordName}&type=${type}`
            let content = await fetch(url).catch(err => err)
            
            if(content.status === 200) {
                const results = await content.json()
                setTasks(results)
            }
            return
        }
        setTasks([])
    }

    const handleBlur = () => {
        setTasks([])
    }


const readOnlyCard = () => {
    if(isReadOnly) {
       return (
        <div className="read-only">
            <i>{getIcon(type)}</i>
            <p>{recordName}</p>
            <p className="close" onClick={() => setReadOnly(false)}>
                <CloseIcon></CloseIcon>
            </p>
        </div>
       )
    }
    return <div></div>
}

const label = () => {
    if(required){
        return <p><span className="asterisk">*</span>{name}</p>
    }
    return <p>{name}</p>
}

const showResults = () => {
    if (tasks.length) {
        return (
        <div className="results">
            {tasks.map(task => 
                <SearchItem 
                key={task.ID} 
                task={task}
                type={type}
                handleSetRecordName={setRecordName}
                editModeDispatch={setReadOnly}>
                </SearchItem>)
            }
        </div>
        )
    }
}

const getIcon = (type) => {
    switch (type) {
        case "app_user":
            return <i className="icon"><UserIcon></UserIcon></i>
        case "task":
            return <i className="icon"><TaskIcon></TaskIcon></i>
        default:
            return <i></i>
    }
}


return(
    <div className="custom-input">
        {label()}
        <input
        onChange={handleOnChange}
        onBlur={handleBlur}/>
        {readOnlyCard()}    
        {showResults()}
    </div>
    )
}




export default Input