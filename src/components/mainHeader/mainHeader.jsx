import React from "react"
import "./mainHeader.css"
import {Logo} from '../../asset/asset'

const mainHeader = () => {
    return(
        <div className="main-nav">
            <div className="main-nav_content">
                <div className="logo">
                    <Logo></Logo>
                    <h3>TODAY</h3>
                </div>
            </div>
        </div>
    )
}

export default mainHeader;