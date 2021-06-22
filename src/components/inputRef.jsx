import React, { Component } from 'react'

export default class InputRef extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.inputRef)
    }

    focusInput=()=>{
        this.inputRef.current.focus();
    }

    render() {
        return (
            <input type="text" ref={this.inputRef}/>
        )
    }
}

