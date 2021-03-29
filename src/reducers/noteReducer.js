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
    default:
      return state
  }
}

export default noteReducer
