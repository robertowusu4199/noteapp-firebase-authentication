import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateNotes } from '../Actions/noteActions'




function EditNoteform(props) {
    const[state,notestate]=useState({
        title:props.note.date,
        date:props.note.title,
        note:props.note.note,
    })
    function handleonChange(event){
                notestate({
                    ...state,
                    [event.target.name]:event.target.value,
                })
                console.log(notestate)
                
            }
    function handleonclick() {
        
        let note={...state , id:props.note.id}
        console.log("upat", note)
        props.updateNotes(props.note.id, note)
        props.hideModal()
    }
    return (
        <div>
            <div className='date'>
                <input type="date"
                name="date"
                className="dateinputt" 
                value={state.date}
                onChange={handleonChange}/>
            </div>

            <div className="title">
                <input type="text" 
                name="title"
                className="titleBox"
                placeholder="Title"
                value={state.title}
                onChange={handleonChange}
                />
            </div>

            <div className="text-edit">
                <textarea name="note" 
                id="" 
                cols="30" 
                rows="10"
                value={state.note}  
                onChange={handleonChange}/>
            </div>

            <div>
            <button type="Submit" 
            className="update-btn text-left" 
            onClick={handleonclick}>
                update
            </button>
            </div>

        </div>
    )
}

let mapDispatchToProps={
    updateNotes
}
let mapStateToProps=()=>{}
export default connect(mapStateToProps, mapDispatchToProps)(EditNoteform);