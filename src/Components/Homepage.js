import React from 'react'
import Noteform from "./Noteform";
import Notelist from './Notelist'
import { connect } from 'react-redux';
import { logout } from "../Actions/authActions"

function Homepage(props) {

    function handlelogout() {
        props.logout()
    }

    return (
        <div>
            <div className='row text-right' style={{ padding: 20 }}>
                <button onClick={handlelogout}>Sign Out</button>
            </div>

            <div className="container">
                <div className="row">
                    <h3>My Notes</h3>
                    <div className="col-md-4 notes">

                        <Noteform />
                    </div>

                    <div className="col-md-8 noteslist">
                        <Notelist />
                    </div>
                </div>

            </div>

        </div>

    )
}

let mapDispatchToProps = {
    logout,
}

export default connect(null, mapDispatchToProps)(Homepage);