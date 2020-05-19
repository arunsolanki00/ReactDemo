import React, { Component } from 'react'
import InputComp from './InputComp'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }
    
    clickHandler =()=>
    {
        this.componentRef.current.focusInputClick()
    }
    render() {
        return (
            <div>
                <InputComp ref={this.componentRef} />
                <button onClick={this.clickHandler}> Go</button>
            </div>
        )
    }
}

export default FocusInput