import React, { Component } from 'react'

class InputComp extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }
    
    focusInputClick(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default InputComp
