import React, { Component, createRef } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
            
    }
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    clickHandler = () => {
        console.log("User Entered", this.inputRef.current.value);
    }
    
    render() {
        return (
            <>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}
export default RefsDemo 