import React, { Component } from 'react';
import LifeCycleB from './lifeCycleB'

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ramya'
        }
        console.log("LifecycleA Mounting --> Constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA Mounting --> getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA Mounting --> componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleA Update --> shouldComponentUpdate")
        return true
    }
    
    getSnapshotBeforeUpdate(preProps, prevState){
        console.log("LifecycleA Update --> getSnapshotBeforeUpdate")
        return null
    }
    
    componentDidUpdate(){
        console.log("LifecycleA Update --> componentDidUpdate")
    }

    handleChange = () =>{
        this.setState({
            name: "Saumiya"
        })
    }

    render() {
        console.log("LifecycleA Mounting --> render")
        return (
            <div>
                 <div>Life Cycle A</div>
                 <button onClick={this.handleChange}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}
