import React from 'react'

// function Greet()
// {
//     return <h1> Hello Arun </h1>
// }

const Greet = (props)=>
{
    return <h1> Hello Arun {props.name}  City {props.myCity} 
    {props.children}
    </h1>
}
 export default Greet

