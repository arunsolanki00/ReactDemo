import React, { Component } from 'react'

class StateClass extends Component
{
    constructor()
    {
        super()
        this.state={
            message : 'State Class Example',
            counter : 0
        }
    }
    
    changeButtonClick()
    {
        this.setState
         ({
            message :'Button Clicked'
        })
    }
    CounterClick()
    {
        // this.setState({
        //     counter : this.state.counter + 1
        // },
        // () => {
        //     console.log('Callback Value: ',this.state.counter) 
        // })

        this.setState( (previousState, props) => ({
            counter : previousState.counter + 1
        }))
        console.log(this.state.counter) 
        
    }
    increementCounterFive()
    {
        this.CounterClick()
        this.CounterClick()
        this.CounterClick()
        this.CounterClick()
        this.CounterClick()
    }
    render(){
        return(
            <div>
                const {name,fullname}=this.props
                

                 <button onClick={()=>this.changeButtonClick()}> Action </button>
                 <h1> {this.state.message} </h1>

                 <button onClick={()=>this.increementCounterFive()}> Couter </button>
                 <h1> {this.state.counter} </h1>
                 
             </div>
        )
    }
}
export default StateClass