import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2> I am {person.name}.  I am  {person.age} year old. I am expert in {person.skills} </h2>
        </div>
    )
}

export default Person
