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