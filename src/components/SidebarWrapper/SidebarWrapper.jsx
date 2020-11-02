import React from "react";
import "./SidebarWrapper.css"
import  SprintProgress from '../SprintProgress/SprintProgress'

const SidebarWrapper = () => {
    return(
        <div className="sidebar">
            <SprintProgress></SprintProgress>
        </div>
    )
}

export default SidebarWrapper;
