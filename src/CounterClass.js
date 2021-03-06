import React from 'react'

class CounterClass extends React.Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h1>The Count is: {this.state.count} </h1>
                <button onClick={this.increment}>Add 1</button>
            </div>
        )
    }
}

export default CounterClass
