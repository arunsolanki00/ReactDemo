import React, { Component } from 'react'

 class RegComp extends Component {
    render() {
        console.log('Regular Component render')
        return (
            <div>
                Reg Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
