import React from 'react'

export  function getAllNoteActions() {
    return(dispatch,state,{getFirestore})=>{
       const db = getFirestore();
       db.collection('notes')
       .onSnapshot(
        (results)=>{
            let notes =[];
            results.forEach((doc)=>{
                notes.push({...doc.data(), id: doc.id});
            });
            dispatch({
                type: 'SET_ALL_NOTES',
                payload: notes,
              });
        },
        (err) => {
            console.log(err);
          }   
       );
       
    };
   
}

export function addNotes (newNotes) {
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('notes').add(newNotes)  
        } catch (error) {
            console.log(error);
        }
    }  
}

export function deleteNotes (id) {
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('notes').doc(id).delete();
        } catch (error) {
            console.log(error);
        }
    } 
}

export  function updateNotes(id,updatednote) {
    console.log("nau",updatednote)
     
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('notes').doc(id).update(updatednote);
        } catch (error) {
            console.log(error);
        }
    } 
}









{/* export function addNotes (newNotes) {
    return {
        type: "SET_ADD_NOTES",
        payload: newNotes
    }
}

export function deleteNotes (id) {
    return {
        type: "SET_DELETE_NOTES",
        payload: id
    }
}

export  function updateNotes(id,updatednote) {
    console.log("nau",updatednote)
     
    return{
       type:"SET_UPDATE_NOTE",
       payload:{ id:id , updatednoteinfo:updatednote},
       
    }
} */}







//Adding the Authentication

/*export function addNotes(newContact) {
    return (dispatch, state, { getFirestore }) => {
        const db = getFirestore()
        db.collection('Contacts')
            .add(newContact)
            .then(() => {
                dispatch({
                    type: "SET_ADD_NOTES",
                    payload: newContact
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}


export function getAllNoteActions() {
    return (dispatch, state, { getFirestore }) => {
        const db = getFirestore()
        db.collection('Contacts')
            .get()
            //this gives you a snapshot of all the documents in the collection
            //you can give it any variable, which i have named results
            .then((results) => {
                let contactsindb = []//create an array to take all users from the database
                results.forEach((doc) => { //send each document to the users array
                    let contact = doc.data()
                    contact.id = doc.id
                    contactsindb.push(doc.data())
                })

                dispatch({ //now send the data to the reducer
                    type: "GET_ALL_CONTACTS",
                    payload: contactsindb
                })

            })
            .catch((error) => {
                console.log(error)
            })
    }


}*/