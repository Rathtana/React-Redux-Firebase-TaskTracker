import React, { Component } from 'react'

class SignIn extends Component {
    state = {
      email: '',
      password: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                  <h5 className="grey-text text-darken-3">Sign In</h5>
                  <div className="input-field">
                    <input id="email" type="email" onChange={this.handleChange}></input> 
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input id="password" type="password" onChange={this.handleChange}></input> 
                    <label htmlFor="password">Password</label>
                  </div>
                  <button className="btn pink lighten-1" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default SignIn;
