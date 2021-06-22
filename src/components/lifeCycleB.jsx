import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ramya'
        }
        console.log("LifecycleB Mounting --> Constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleB Mounting --> getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleB Mounting --> componentDidMount")
    }
    
    shouldComponentUpdate(){
        console.log("LifecycleB Update --> shouldComponentUpdate")
        return true
    }
    
    getSnapshotBeforeUpdate(preProps, prevState){
        console.log("LifecycleB Update --> getSnapshotBeforeUpdate")
        return null
    }
    
    componentDidUpdate(){
        console.log("LifecycleB Update --> componentDidUpdate")
    }

    render() {
        console.log("LifecycleB Mounting --> render")
        return (
            <div>
                 <div>Life Cycle B</div>
            </div>
        )
    }
}
