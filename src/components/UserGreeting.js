//Conditional rendering
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
    //     let message;
    //     if(this.state.isLoggedIn){
    //         message =  <h1>Welcome Divya</h1>
    //     }
    //     else{
    //         message =  <h1>Welcome Guest</h1>
    //     }
    //     return (
    //  <>{message}</>
    //     )
    return this.state.isLoggedIn ? <h1>Welcome Divya</h1> : <h1>Welcome Guest</h1>
    }
}

export default  UserGreeting