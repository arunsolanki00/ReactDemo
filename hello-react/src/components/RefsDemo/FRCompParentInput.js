import React, { Component } from 'react'
import FRCompChildInput from './FRCompChildInput'

class FRCompParentInput extends Component {
    constructor(props) {
        super(props)
    this.inputRef = React.createRef()
   }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRCompChildInput ref={this.inputRef} />
                <button onClick={this.clickHandler}> GO</button>
            </div>
        )
    }
}

export default FRCompParentInput
