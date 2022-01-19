import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
{
    user =>{//Render Props Technique
        return (<>
        <h1>Child Component</h1>
        <h2>Hello{user}</h2>
        
        </>
        )
    }
}
            </UserConsumer>
        )
    }
}
export default Child