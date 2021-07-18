const initialState = { notes: [] }

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ALL_NOTES":
            let notes = action.payload;
            return { notes: notes };

        default:
            return state;
    }

}
export default notesReducer;













//From the noteActions
/*case "SET_ALL_NOTES":
let contactsfromdb = action.payload//payload contains the data that is in the db
return {
    contacts : contactsfromdb
}*/






//The old contactReducer

/*
switch (action.type) {
            case "SET_ALL_NOTES":
            let notes = action.payload;
            return { notes: notes };

            case "SET_ADD_NOTES":
                console.log(action.payload)
                return { ...state, notes: [...state.notes, action.payload] };

            case "SET_DELETE_NOTES":
                var notesDelete = state.notes.filter(note => note.id !== action.payload)
                return { ...state, notes: notesDelete }

            case "SET_UPDATE_NOTE":
                var id=action.payload.id;
                var updatedinfo=action.payload.updatednoteinfo;
                var Notesupdate = state.notes.map((note) =>{
                    if (note.id===id) {
                      return updatedinfo
                    }
                    return note
                  })
                  return{notes:Notesupdate}

            default:
                return state;
        }
*/