import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
      title: '',
      content: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
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
                  <h5 className="grey-text text-darken-3">Create new project</h5>
                  <div className="input-field">
                    <input id="title" type="text" onChange={this.handleChange}></input> 
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="input-field">
                    <textarea id="content" type="text" className="materialize-textarea" onChange={this.handleChange}></textarea> 
                    <label htmlFor="content">Content</label>
                  </div>
                  <button className="btn pink lighten-1" type="submit">Create</button>
                </form>
            </div>
        )
    }
}

//takes in a dispatch method so we can use it to dispatch 
const mapDispatchToProps = (dispatch) => {
  return {
    //add createProject method to props
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);
