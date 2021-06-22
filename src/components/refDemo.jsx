import React, { Component } from 'react'

export default class RefDemo extends Component {
constructor(props) {
    super(props)
    this.inputRef = React.createRef()
}

    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef)
    }

    handleClick=()=>{
       alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your Name" ref={this.inputRef}/>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}


