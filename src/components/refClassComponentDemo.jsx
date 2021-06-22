import React, { Component } from 'react'
import InputRef from './inputRef';

export default class RefClassComponentDemo extends Component {

    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }
    
    componentDidMount(){
        console.log(this.componentRef)
    }

    handleClick=()=>{
        this.componentRef.current.focusInput();
     }

    render() {
        return (
            <>
            <InputRef ref={this.componentRef}/>
            <button type="button" onClick={this.handleClick}>Focus Input</button>
            </>
        )
    }
}

