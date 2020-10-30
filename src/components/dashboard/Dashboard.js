import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        //passing this props down to ProjectList
        const { projects, auth } = this.props;

        //route guarding if not signed in 
        if(!auth.uid) 
            return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}></ProjectList>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>
        )
    }
}

//state of our store 
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        //props: state from firestore projects collection  
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    firestoreConnect(() => ['projects']), // sync todos collection from Firestore into redux
    connect(mapStateToProps)
  )(Dashboard)

  