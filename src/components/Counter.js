import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        this.incrementCount=this.incrementCount.bind(this);// binding the this keyword to this function
        this.incrementFive=this.incrementFive.bind(this);
    }
    // incrementCount(){
    //    this.setState({
    //         count: this.state.count + 1 
    //     },()=> console.log(this.state.count));
    //     // this.state.count=this.state.count + 1;// this render function doesn't runs automatically if this render function doesn't run again i.e rerendering the old count value will be shown. this render function only rerenders or reruns whenever we use Setstate
    // }

    //performance optimization
    incrementCount(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
         // this.state.count=this.state.count + 1;// this render function doesn't runs automatically if this render function doesn't run again i.e rerendering the old count value will be shown. this render function only rerenders or reruns whenever we use Setstate
     }
    incrementFive(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    render() {
        return (
            <>
            <h2>
            Count- {this.state.count}  
            </h2>
            {/* <button onClick={this.incrementCount}>Increment</button> */}
            <button onClick={this.incrementFive}>Increment</button>
            </>
        )
    }
}
export default Counter;
//this is not defined
