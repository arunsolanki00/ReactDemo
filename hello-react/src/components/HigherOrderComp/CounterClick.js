import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class CounterClick extends Component {
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
        const {counter}=this.state
        return (
            <div>
                <button onClick={this.clickHander}> {this.props.name} Counter {counter} </button>
            </div>
        )
    }
}

export default UpdatedComponent(CounterClick)
