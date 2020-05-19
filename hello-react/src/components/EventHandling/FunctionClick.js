import React from 'react'

function FunctionClick() {
   function clickHandling() {
        console.log('Button clicked')
    }

    return (
        <div>
            <button onClick={clickHandling}> Button Click </button>
        </div>
    )
}

export default FunctionClick
