import './customtextarea.css'
import React from 'react'
import {BoldIcon} from '../../asset/asset'
import {JustifyLeft} from '../../asset/asset'
import {JustifyCenter} from '../../asset/asset'
import {JustifyRight} from '../../asset/asset'
import {OrderedList} from '../../asset/asset'
import {UnOrderedList} from '../../asset/asset'
import {ItalicIcon} from '../../asset/asset'
import {UnderLineIcon} from '../../asset/asset'
import {StrikeThroughIcon} from '../../asset/asset'


const Customtextarea = () => {
   
    const textAreaContent = React.createRef()

    const handleCommandExecBold = () =>{
        document.execCommand('bold', false, null)
        restoreSelectedText()
    }
    const handleCommandExecItalic = () =>{
        document.execCommand('italic', false, null)
        restoreSelectedText()
    }
    const handleCommandExecUnderLine = () =>{
        document.execCommand('underLine', false, null)
        restoreSelectedText()
    }
    const handleCommandExecStrikeThrough = () =>{
        document.execCommand('strikeThrough', false, null)
        restoreSelectedText()
    }
    const handleCommandExecJustifyLeft = () =>{
        document.execCommand('justifyLeft', false, null)
        restoreSelectedText()
    }

    const handleCommandExecJustifyCenter = () =>{
        document.execCommand('justifyCenter', false, null)
        restoreSelectedText()
    }

    const handleCommandExecJustifyRight = () =>{
        document.execCommand('justifyRight', false, null)
        restoreSelectedText()
    }

    const handleCommandExecinsertOrderedList = () =>{
        document.execCommand('insertOrderedList', false, null)
        restoreSelectedText()
    }

    const handleCommandExecinsertUnorderedList = () =>{
        document.execCommand('insertUnorderedList', false, null)
        restoreSelectedText()
    }

    const handleCommandExecinsertForeColor = (event) =>{
        const colorHex = event.target.value
        document.execCommand('foreColor', false, `${colorHex}`) 
        restoreSelectedText()
        const range = saveSelection()
        setTimeout(()=>{restoreSelection(range)}, 500)
    }

    
    const saveSelection = () => {
        if (window.getSelection) {
            let sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                return sel.getRangeAt(0);
            }
        } else if (document.selection && document.selection.createRange) {
            return document.selection.createRange();
        }
        return null;
    }

    const restoreSelection = (range) => {
        if (range) {
            if (window.getSelection) {
                let sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (!document.selection && !range.select) {
                range.select();
            }
        }
    }

    const restoreSelectedText = () => {
        const range = saveSelection()
        setTimeout(()=>{restoreSelection(range)}, 100)
    }
    
    return (
        <div className="textarea-wrapper">
            <div className="control">
                <div className="iconwrapper">
                    <div className="icon" onMouseDown={handleCommandExecBold}>
                        <BoldIcon ></BoldIcon>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecItalic}>
                        <ItalicIcon></ItalicIcon>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecUnderLine}>
                        <UnderLineIcon></UnderLineIcon>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecStrikeThrough}>
                        <StrikeThroughIcon></StrikeThroughIcon>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecJustifyLeft}>
                        <JustifyLeft></JustifyLeft>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecJustifyCenter}>
                        <JustifyCenter></JustifyCenter>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecJustifyRight}>
                        <JustifyRight></JustifyRight>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecinsertOrderedList}>
                        <OrderedList></OrderedList>
                    </div>
                    <div className="icon" onMouseDown={handleCommandExecinsertUnorderedList}>
                        <UnOrderedList></UnOrderedList>
                    </div>
                    <div className="icon">
                        <input type="color" onChange={handleCommandExecinsertForeColor}/>
                    </div>
                </div>
            </div>
        
            <div className="textarea" contentEditable="true" ref={textAreaContent}>
            </div>
        </div>
    )
}


export default Customtextarea