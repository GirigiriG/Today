import "./SearchItem.css"
import React, { useState } from 'react'
import {TaskIcon, UserIcon} from "../../asset/asset"


const SearchItem = ({task, type, editModeDispatch, handleSetRecordName}) => {
    const recordName = React.createRef();
    const [editAble, ] = useState(false)
    
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

const handleOnMouseDown = () => {
    editModeDispatch(!editAble)
    handleSetRecordName(task.Name)
}

    return (
        <div className="item" onMouseDown={handleOnMouseDown} key={task.id}>
            {getIcon(type)}
            <p ref={recordName}>{task.Name}</p>
        </div>
    )
}

export default SearchItem