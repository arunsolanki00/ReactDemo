import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainerCleaner() {
    const[display,setDisplay] =useState(true)
    
    return (
        <div>
            <button onClick={()=>setDisplay(!display)} > Toggle Click </button>            
            {display && <HookMouse /> }
        </div>
    )
}

export default MouseContainerCleaner
