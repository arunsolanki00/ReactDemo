import React from 'react'

// function FRCompChildInput() {
//     return (
//         <div>
            
//         </div>
//     )
// }

const FRCompChildInput = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type="text" ref={ref} />            
        </div>
    )
} ) 

export default FRCompChildInput
