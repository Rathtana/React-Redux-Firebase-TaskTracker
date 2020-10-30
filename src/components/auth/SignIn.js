import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
      email: '',
      password: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    render() {
      const { authError, auth } = this.props; 

      //redirect to the dashboard if already signed in
      if(auth.uid)
        return <Redirect to='/' />
      else if (auth.uid === undefined)
        return <div></div>
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
                  <div className="red-text center">
                    {authError ? <p>{authError}</p>: null }
                  </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
