import React from 'react'
import  "./ContentWrapper.css"

import ListviewWrapper from "../ListviewWrapper/ListviewWrapper"
import SidebarWrapper from "../SidebarWrapper/SidebarWrapper"

let contentWapper = () => {
    return (
        <div className="content-wrapper center-content">
            <ListviewWrapper></ListviewWrapper>
            <SidebarWrapper></SidebarWrapper>
        </div>
    )
}

export default contentWapper;