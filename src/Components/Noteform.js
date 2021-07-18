import React, {useState} from 'react'
import { connect } from 'react-redux';
import { addNotes } from '../Actions/noteActions';


function Noteform(props) {
    const[state,notestate]=useState({
        title:"",
        date:"",
        note:"",
    })
    function handleonChange(event){
                notestate({
                    ...state,
                    [event.target.name]:event.target.value,
                })
                console.log(notestate)
                
            }
    function handleonclick() {
        let noteId=10000 + Math.random() * 100000000 ;
        let note={...state , id:noteId}
        console.log(note)
        props.addNotes(note)
    }
    return (
        <div className="tainer">
            <h2 style={{marginLeft: "31px"}}>Date</h2>
            <div className='date'>
                <input type="date"
                name="date"
                className="dateinput" 
                value={state.date}
                onChange={handleonChange}/>
            </div>

            <div className="title">
                <h2 style={{marginLeft: "31px"}}>Title</h2>
                <input type="text" 
                name="title"
                className="titlebox text-center"
                placeholder="Title"
                value={state.title}
                onChange={handleonChange}
                />
            </div>

            <div className="textareaspace">
                <h2 style={{marginLeft: "31px"}}>Note</h2>
                <textarea name="note" 
                id="" 
                cols="30" 
                rows="10"
                value={state.note}  
                onChange={handleonChange}/>
            </div>

            <button type="submit" 
            className="save-btn" 
            onClick={handleonclick}>Add</button>
        </div>
    )
}

export default connect(null,{addNotes})(Noteform);
