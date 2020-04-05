import React from 'react'
import axios from 'axios';

class SimpleFormClass extends React.Component {

    state = {
        email: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('https://httpbin.org/post', {
            email: this.state.email
        }).then(rsp => console.log(rsp.data.data)
        )
    }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <label htmlFor="email">Email </label>
                 <input type="text" name="email"/>
                <button>Submit</button>
              </form> 
            </div>
        )
    }
}

export default SimpleFormClass
