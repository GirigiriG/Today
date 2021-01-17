import './customtextarea.css'
import React from 'react'
import {ControlIconBold} from '../../asset/asset'

const Customtextarea = (command) => {
    const textAreaRef = React.createRef();
    const handleExecCommand = () =>{
      console.log(window.getSelection());
       console.log(document.execCommand("bold", false, null))     
    }

    return (
        <div className="textarea-wrapper">
            <div className="control">
                <div className="icon" onClick={handleExecCommand}>
                    <ControlIconBold ></ControlIconBold>
                </div>
            </div>
            <div className="textarea" ref={textAreaRef} contentEditable="true">
            </div>
        </div>
    )
}


export default Customtextarea