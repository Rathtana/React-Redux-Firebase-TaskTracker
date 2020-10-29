import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase'
// //connect to a collection in firestore 
// import { usefirestoreConnect } from 'react-redux-firebase';
//to combine connect and firestore together for our higher order componets
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        //passing this props down to ProjectList
        const { projects } = this.props;
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
    console.log(state);
    return {
        //props: state from firestore projects collection  
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    firestoreConnect(() => ['projects']), // sync todos collection from Firestore into redux
    connect(mapStateToProps)
  )(Dashboard)

  