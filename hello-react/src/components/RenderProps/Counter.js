import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            counter:0             
        }
    }
    HandleClickCount = ()=> {
        this.setState(prevState => {
            return {counter:prevState.counter + 1}
        })
    }
   
    render() {
        return (
            <div>
                {this.props.children(this.state.counter,this.HandleClickCount)}
            </div>
        )
    }
}

export default Counter
