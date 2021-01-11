import "./input.css"
import React, {useState } from "react";
import {TaskIcon} from "../../asset/asset"


const Input = ({type}) => {
    
    const [tasks, setTasks] = useState([])
    const handleOnChange = async (event) => {
        let name = event.target.value.replace(" ", encodeURIComponent('+'));
        
        if (name.length >= 3) {
            const url = `http://localhost:3001/get/record/?name=${name}&type=${type}`
            let content = await fetch(url).catch(err => console.error(err))
            const results = await content.json()
            setTasks(results)
            return
        }
        setTasks([])
    }

    const handleBlur = () => {
        setTasks([])
    }

    return(
        <div className="custom-input">
            <input
            onChange={handleOnChange}
            onBlur={handleBlur}
            />
            {showResults(tasks)}
        </div>
    )
}

const showResults = (tasks) => {

    if(tasks != null) {
        return (
            <div className="results">
                {tasks.map(task => 
                <div className="items">
                <p><TaskIcon className="taskIcon"></TaskIcon> {task.Name}</p>
                </div>)}
            </div>
        )
    }
}


export default Input