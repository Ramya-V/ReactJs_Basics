import React, { Component } from 'react'
import RefForwardInput from './refForwardInput';

export default class RefForwardDemo extends Component {

    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }
    
    componentDidMount(){
        console.log(this.componentRef)
    }
        
    handleClick=()=>{
        this.componentRef.current.focus();
     }

    render() {
        return (
            <div>
            <RefForwardInput ref={this.componentRef}/>
            <button type="button" onClick={this.handleClick}>Focus Input</button>
            </div>
        )
    }
}


