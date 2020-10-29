export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        // getting an instance to our firestore db
        const firestore = getFirestore();
        
        // make async call to database 
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authroId: 12345,
            createdAt: new Date()
        }).then((docref) => {
            console.log(docref.id);
            // resume dispatch success
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch(err => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })

    }
}
