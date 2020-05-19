import React from 'react'
//way 1
// const DestructuringProps = ({name,fullname}) =>
//Way 2
const DestructuringProps =props => 
{
    const {name, fullname} = props
    return(
        <div>
            <h1>name: {name} fullname: {fullname}</h1>
        </div>
    )
}
export default DestructuringProps
