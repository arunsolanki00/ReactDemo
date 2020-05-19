import React, { Component } from 'react'
import UpdateClassB from './UpdateClassB'

class UpdateClassA extends Component {
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
        console.log('Lifecycle A componentDidMount')
    }
    shouldComponentUpdate()
    {
        console.log('Lifecycle A shouldComponentUpdate')
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('Lifecycle A getSnapshotBeforeUpdate')
    }
    componentDidUpdate()
    {
        console.log('Lifecycle A componentDidUpdate')
    }
    clickHandle = () => {
        this.setState({
            name:'CodeCvaluation'
        })
    }
    render() {
        console.log('Lifecycle A Render')
        return (
            <div>
                Lifecycle A
                <button onClick='clickHandle'> Change </button>
                <UpdateClassB />
            </div>
        )
    }
}

export default UpdateClassA
