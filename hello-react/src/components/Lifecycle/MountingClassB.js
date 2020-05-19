import React, { Component } from 'react'

class MountingClassB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Arun'      
        }
        console.log('Lifecycle B Constructor')
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log('Lifecycle B getDerivedStateFromProps')
    }

    componentDidMount()
    {
        console.log('Lifecycle B componentDidMount')
    }
    render() {
        console.log('Lifecycle B Render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default MountingClassB
