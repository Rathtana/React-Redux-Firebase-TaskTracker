export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        // getting an instance to our firestore db
        const firestore = getFirestore();

        // getting data from our state 
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        
        // make async call to database 
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then((docref) => {
            // console.log(docref.id);
            // resume dispatch success
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch(err => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })

    }
}
