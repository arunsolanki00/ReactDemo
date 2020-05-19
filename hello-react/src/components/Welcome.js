import React, { Component } from 'react'

class Welcome extends Component
{
    render(){
        return (
            <h1> Hello React {this.props.myName} </h1>
            
        );
    }
}
export default Welcome