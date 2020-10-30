import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { signUp } = this.props;

    signUp(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    const { auth, authError } = this.props;
    //redirect to the dashboard if already signed in
    if (auth.uid)
      return <Redirect to='/' />
    else if (!auth.isLoaded) //auth hasn't loaded yet 
      return <div></div>
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
          <div className="red-text center">
            { authError ? <p> { authError } </p> : null}
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
