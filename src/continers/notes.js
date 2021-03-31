import {connect} from 'react-redux'
import Notes from '../components/Notes'
import {addNote, deleteNote, editNote} from '../actions'

const mapStateToProps = (state, oProps) => {
  return {
    notes: state.note.notes
  }
}

const mapDispatchToProps = (dispatch, oProps) => {
  return {
    addNote: (payload) => dispatch(addNote(payload)),
    deleteNote: (payload) => dispatch(deleteNote(payload)),
    editNote: (payload) => dispatch(editNote(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
