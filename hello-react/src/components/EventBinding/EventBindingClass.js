import React, { Component } from 'react'

export class EventBindingClass extends Component {
   constructor(props)
   {
       super(props)
       this.state={
            message:'Hello'
       }
       //approach 3 for event binding
       this.clickHandler = this.clickHandler.bind(this)
   }
   
   clickHandler()
   {
       console.log(this);
        this.setState({
            message:'New Click'
        })
   }

   clickHandlerAnother = () =>
   {
       this.setState({
           message:'Approach 4'
       })
   }

   render() {
        return (
            <div>
                {/* approach 1 */}
                <button onClick={this.clickHandler.bind(this)}>Event handling Approach 1</button>
                {/* approach 2 */}
                <button onClick={ () => this.clickHandler()}>Event handling Approach 2</button>
                {/* approach 3 */}
                <button onClick={this.clickHandler}>Event handling  Approach 3</button>
                {/* approach 4 */}
                <button onClick={this.clickHandlerAnother}>Event handling Approach 4</button>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default EventBindingClass
