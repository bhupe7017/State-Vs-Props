import React, { Component } from 'react'

class State extends Component {

    constructor() {
        super()
        this.state = {
            message: 'This Is State'
        }
    }

    changeMessage(){
        this.setState({
            message : 'Thank you For Clicking'
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Click For Change</button>
            </div>
        )
    }
}

export default State
