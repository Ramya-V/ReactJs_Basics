import React, { Component } from 'react'
import Memo from './memo'

export default class MemoParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Cat Valentine"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Cat Valentine"
            })
        }, 2000)
    }

    render() {
        console.log("---- Parent Component ----")
        return (
            <div>
                <h1>Parent Component</h1>
                <Memo name={this.state.name}/>
            </div>
        )
    }
}
