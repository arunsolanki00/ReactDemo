import React, { Component } from 'react'

class CounterClassWithoutHook extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name:''
        }
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
        console.log('Component Mount')
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count)
        {
            document.title=`Clicked ${this.state.count} times`
            console.log('Updating count')
        }
    }


    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}} />
                <button onClick={() => this.setState({count : this.state.count + 1})}>
                    click {this.state.count} click
                </button>

            </div>
        )
    }
}

export default CounterClassWithoutHook
