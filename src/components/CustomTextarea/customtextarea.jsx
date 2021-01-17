import './customtextarea.css'
import React from 'react'
import {ControlIconBold} from '../../asset/asset'
import {JustifyLeft} from '../../asset/asset'
import {JustifyCenter} from '../../asset/asset'
import {JustifyRight} from '../../asset/asset'
import {OrderedList} from '../../asset/asset'
import {UnOrderedList} from '../../asset/asset'
import {ImageInsert} from '../../asset/asset'

const Customtextarea = ({name}) => {
  
    const handleCommandExecBold = () =>{
        document.execCommand('bold', false, null)        
    }
    const handleCommandExecJustifyLeft = () =>{
        document.execCommand('justifyLeft', false, null)        
    }

    const handleCommandExecJustifyCenter = () =>{
        document.execCommand('justifyCenter', false, null)        
    }

    const handleCommandExecJustifyRight = () =>{
        document.execCommand('justifyRight', false, null)        
    }

    const handleCommandExecinsertOrderedList = () =>{
        document.execCommand('insertOrderedList', false, null)        
    }

    const handleCommandExecinsertUnorderedList = () =>{
        document.execCommand('insertUnorderedList', false, null)        
    }
    // const handleCommandExecinsertInsertImage = () =>{
    //     const imageURL = 'https://s3.amazonaws.com/media-p.slid.es/uploads/436198/images/6652648/codercat.jpg'
    //     document.execCommand('insertImage', false, imageURL)        
    // }

    
    return (
        <div className="textarea-wrapper">
            <p className="name">{name}</p>
            <div className="control">
                <div className="iconwrapper">
                    <div className="icon" onMouseDown={handleCommandExecBold} data-command="bold">
                        <ControlIconBold ></ControlIconBold>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecJustifyLeft} data-command="bold">
                        <JustifyLeft></JustifyLeft>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecJustifyCenter} data-command="bold">
                        <JustifyCenter></JustifyCenter>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecJustifyRight} data-command="bold">
                        <JustifyRight></JustifyRight>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecinsertOrderedList} data-command="bold">
                        <OrderedList></OrderedList>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecinsertUnorderedList} data-command="bold">
                        <UnOrderedList></UnOrderedList>
                    </div>
                    {/* <div className="icon" onMouseDown={handleCommandExecinsertInsertImage} data-command="bold">
                        <ImageInsert></ImageInsert>
                    </div> */}
                </div>
            </div>
            <div className="textarea" contentEditable="true">

            </div>
        </div>
    )
}


export default Customtextarea