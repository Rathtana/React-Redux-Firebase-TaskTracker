import React, { Component } from 'react'

class SignUp extends Component {
    state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
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
        console.log(this.state);
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                  <h5 className="grey-text text-darken-3">Sign Up</h5>
                  
                  <div className="input-field">
                    <input id="email" type="email" onChange={this.handleChange}></input> 
                    <label htmlFor="email">Email</label>
                  </div>
                 
                  <div className="input-field">
                    <input id="password" type="password" onChange={this.handleChange}></input> 
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="input-field">
                    <input id="firstName" type="text" onChange={this.handleChange}></input> 
                    <label htmlFor="firstName">First Name</label>
                  </div>

                  <div className="input-field">
                    <input id="lastName" type="text" onChange={this.handleChange}></input> 
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                  <button className="btn pink lighten-1" type="submit">Sign up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;
