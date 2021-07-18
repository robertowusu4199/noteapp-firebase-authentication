import { useEffect } from "react";
import { connect } from 'react-redux'
import { getAllNoteActions } from '../Actions/noteActions';
import Notes from './Notes'


function Notelist(props) {
    useEffect(() => {
        props.getAllContacts();
    }, []);

    console.log('notes', props.notes)
    return (
        <div>
            {props.notes.map((note) => (<Notes note={note} />))}
        </div>

    )
}

function mapStateToProps(state) {
    return {
        notes: state.notes,
    }
}

const mapDispatchToProps = {
    getAllNoteActions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Notelist);
