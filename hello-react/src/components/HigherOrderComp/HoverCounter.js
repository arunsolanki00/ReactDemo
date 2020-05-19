import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            counter:0             
        }
    }
    clickHander = ()=> {
        this.setState(prevState => {
            return {counter:prevState.counter + 1}
        })
    }

    render() {
        const {counter} =this.state
        return (
            <div>
                <h1 onMouseOver={this.clickHander}> {this.props.name} Hover {counter} Times</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
