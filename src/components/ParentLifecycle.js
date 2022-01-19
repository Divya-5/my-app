import React, { Component } from 'react'
import ChildLifecycle from './ChildLifecycle';

class ParentLifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Parent'
        }
        console.log('ParentLifecycle Constructor');
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('ParentLifeCycle getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('ParentLifeCycle componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('ParentLifeCycle shouldComponentUpdate');  
    return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('ParentLifeCycle getSnapshotBeforeUpdate'); 
        return null 
    }
    componentDidUpdate(){
        console.log('ParentLifeCycle  componentDidUpdate');  
    }
    render() {
        console.log('ParentLifeCycle render');
        return (
            <>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({name:"Hello"})}>Change State</button>
                <ChildLifecycle />
            </>
        )
    }
}
export default ParentLifeCycle