import React from 'react'
import './myStyle.css'

function Stylesheet(props)
{
    let className= props.myClass ? 'myClass' : ''

    return(
        // <div className={className} > Hello </div>
        //multiple classes
        <div className={`${className} font-xl`}> Stylesheet </div>
    )
}
export default Stylesheet