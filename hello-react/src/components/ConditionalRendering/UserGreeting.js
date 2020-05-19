import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        //Approach 1
        // if(this.state.isLoggedIn == false){
        //     return ( <div> Welcome Arun </div> )
        // }
        // else
        // {
        //     return ( <div> Welcome Jay </div> )
        // }

        //Approach 2 Element Vaariables
        // let message;
        // if(this.state.isLoggedIn == false){
        //      message = <div> Welcome Arun </div> 
        // }
        // else
        // {
        //     message= <div> Welcome Jay </div> 
        // }
        // return <div>{message}</div>

        //Approach 3 Ternary Operator
        // return this.state.isLoggedIn ?( 
        //     <div> Hello Arun </div> ):( <div> Hello Jay </div>
        // )

        //Approach 4 Short circuit Operator
        return(
            this.state.isLoggedIn && <div> Hello Arun </div>
        )
    }
}

export default UserGreeting
