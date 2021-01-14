import "./input.css"
import React, {useState } from "react";
import  SearchItem from "../../components/SearchItem/SearchItem";
import {TaskIcon, UserIcon} from "../../asset/asset"

const Input = ({type}) => {
    const [tasks, setTasks] = useState([])
    const [isReadOnly, setReadOnly] = useState(false)
    const [name, setName] = useState("")
    
    const handleOnChange = async (event) => {
        let name = event.target.value.replace(" ", encodeURIComponent('+'));
        
        if(name.length >= 3 && name != null) {
            const url = `http://localhost:3001/get/record/?name=${name}&type=${type}`
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
            <p>{name}</p>
            <p className="close" onClick={() => setReadOnly(false)}>x</p>
        </div>
       )
    }
    return <div></div>
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
        <input
        onChange={handleOnChange}
        onBlur={handleBlur}/>
        {readOnlyCard()}    
        <div className="results">
            {tasks.map(task => 
                <SearchItem 
                    key={task.ID} 
                    task={task}
                    type={type}
                    handleSetRecordName={setName}
                    editModeDispatch={setReadOnly}>
                </SearchItem>)
            }
        </div>
    </div>
    )
}




export default Input