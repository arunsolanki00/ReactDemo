import React, { Component } from 'react'

class HoverCount extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // HandleHoverCount = () =>{
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }

    render() {
        const {counter,HandleClickCount}= this.props 
        return (
            <div>
                <h2 onMouseOver={HandleClickCount}>Hovered Count {counter} Number</h2>
            </div>
        )
    }
}

export default HoverCount
