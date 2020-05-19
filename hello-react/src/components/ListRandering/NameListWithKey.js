import React from 'react'

function NameListWithKey()
{
    const names=['Arun','vijay','Jay']
    const nameList =  names.map((name,index )=> <h2 key={index}>{index} {name} </h2>)
    return(
        <div>
           {nameList}
        </div>
    )
}
export default NameListWithKey