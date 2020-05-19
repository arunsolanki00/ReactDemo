import React, { Component } from 'react'
//way 1
// const DestructuringProps = ({name,fullname}) =>
//Way 2
class DestructuringPropsClass extends Component
{
    render()
    {
        const {name,fullname}=this.props
        return(
            <div>
              <h1>name: {name} fullname: {fullname}</h1>
            </div>
        )
    }
}

export default DestructuringPropsClass
