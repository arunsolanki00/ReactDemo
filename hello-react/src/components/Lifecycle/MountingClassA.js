import React, { Component } from 'react'
import MountingClassB from './MountingClassB'

class MountingClassA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Jatin'      
        }
        console.log('Lifecycle A Constructor')
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log('Lifecycle A getDerivedStateFromProps')
    }

    componentDidMount()
    {
        this.googleSDK();
    }
    render() {
        console.log('Lifecycle A Render')
        return (
            <div>
                <MountingClassB />
            </div>
        )
    }
}

export default MountingClassA
