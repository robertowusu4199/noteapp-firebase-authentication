import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteNotes } from '../Actions/noteActions';
import EditNoteform from "./EditNoteform"





function Notes(props) {
    const [displaymodal,setshowmodal] =useState(false);
    function showModal() {
        setshowmodal(true);
    }

    function hideModal() {
        setshowmodal(false);
    }

    function handleDelete() {
        props.deleteNotes(props.note.id);
    }

    return (
        <div className="row">
            <Modal show={displaymodal} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Notes</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <EditNoteform
                            note={props.note}
                            hideModal={hideModal}/>
                    </Modal.Body>
            </Modal>

            <div className="col-md-1 text-center">
                <h4>Date</h4>{props.note.date}
            </div>
            <div className="col-md-3 text-center">
                <h4>Title</h4>{props.note.title}
            </div>
            <div className="col-md-6 text-center">
                <h4>Note</h4>{props.note.note}
            </div>

            <div className="col-md-2">
                <strong><h4 className="text-center">Actions</h4></strong>
                <div className="col-md-6">
                    <button className="edit-btn" onClick={showModal}>
                        Edit
                    </button>
                </div>

                <div className="col-md-6">
                    <button className="deletebtn" onClick={handleDelete} >
                        Delete
                    </button>
                </div>
            </div>
        </div>
        
        
        
    )
}

let mapDispatchToProps ={
    deleteNotes,
}
let mapStateToProps=() =>{}


export default connect(mapStateToProps, mapDispatchToProps)(Notes);