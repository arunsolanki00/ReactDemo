import React, { Component } from 'react'

class UpdateClassB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Jatin'      
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
    shouldComponentUpdate()
    {
        console.log('Lifecycle B shouldComponentUpdate')
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('Lifecycle B getSnapshotBeforeUpdate')
    }
    componentDidUpdate()
    {
        console.log('Lifecycle B componentDidUpdate')
    }

    render() {
        console.log('Lifecycle B Render')
        return (
            <div>
                Update Class B
            </div>
        )
    }
}

export default UpdateClassB
