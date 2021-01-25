import "./input.css"
import React, { useEffect, useState } from "react";
import  SearchItem from "../../components/SearchItem/SearchItem";
import {TaskIcon, UserIcon, CloseIcon} from "../../asset/asset"

const Input = ({type, label, value, required}) => {
    const [tasks, setTasks] = useState([])
    const [isReadOnly, setReadOnly] = useState(false)
    const [valueState, setValueState] = useState("")
    
    console.log(valueState)

    const handleOnChange = async (event) => {
        setValueState(event.target.value)
        let name = event.target.value.replace(" ", encodeURIComponent('+'))
        if (name.length >= 3 && name != null) {
            let url = `http://localhost:3001/get/record/?name=${name}&type=${type}`
            let content = await fetch(url).catch(err => err)
            
            if (content.status === 200) {
                let results = await content.json()
                setTasks(results)
            }
            return
        }
        setTasks([])
    }
    
    useEffect(() => {
        setValueState(value)
        if(value.length > 0) {
            setReadOnly(true)  
        }
    }, [])

    const handleBlur = () => {
        setTasks([])
    }

const readOnlyCard = () => {
    let valueLenght = valueState.length > 0
    if(isReadOnly && valueLenght) {
        return (
            <div className="read-only">
                <i>{getIcon(type)}</i>
                <p>{value}</p>
                <p className="close" onClick={() => {
                    setReadOnly(!isReadOnly)}
                }>
                    <CloseIcon></CloseIcon>
                </p>
            </div>
       )
    }
    return <div></div>
}

const showLabel = () => {
    if(required){
        return <p><span className="asterisk">*</span>{label}</p>
    }
    return <p>{label}</p>
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
                handleSetRecordName={setValueState}
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
        {showLabel()}
        <input
        value={valueState}
        onChange={handleOnChange}
        onBlur={handleBlur}/>
        {readOnlyCard()}    
        {showResults()}
    </div>
    )
}

export default Input