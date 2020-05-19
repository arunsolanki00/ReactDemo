import React, { Component } from 'react'

export class FunctionClickClassComp extends Component {
    
    clickHandling()
    {
        console.log('Button click from class component')    
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandling}> Button Click Class Component</button>
            </div>
        )
    }
}

export default FunctionClickClassComp
