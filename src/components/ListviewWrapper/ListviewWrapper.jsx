import React, { useState } from 'react'
import "./ListviewWrapper.css"
import Listview from "../Listview/Listview"

let ListviewWrapper = () => {
    const  [detailState, setDetail] = useState(false);
    return(
        <div className="listview-wrapper">
            <Listview 
            setDetail={setDetail}
            toggleDetail={detailState}>
            </Listview>
        </div>
    )
}

export default ListviewWrapper;