import * as Types from '../constants'
const initialState = {
  notes: [{
    id:1,
    title: 'Sunil',
    body: 'Krishna'
  }]
}

const noteReducer = (state=initialState, action) => {
  switch (action.type) {
    case Types.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
      case Types.DELETE_NOTE:
        return {
          ...state,
          notes: state.notes.filter(note => note.id !== action.payload)
        }
      case Types.EDIT_NOTE:
      const { payload } = action
      const index = state.notes.findIndex(note => note.id === payload.id)
      const updatedNotes = [...state.notes]
      updatedNotes[index] = payload
        return {
          ...state,
          notes: updatedNotes
        }
    default:
      return state
  }
}

export default noteReducer
