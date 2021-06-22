import React, { Component } from 'react';
import RegularComponent from './regularComponent';
import PureComponents from './pureComponents';

export default class PureRegularParentComponent extends Component {
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
                <RegularComponent name={this.state.name} />
                <PureComponents name={this.state.name} />
            </div>
        )
    }
}