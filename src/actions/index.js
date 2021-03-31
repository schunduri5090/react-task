import * as Types from '../constants'

export function addNote (payload) {
  return {
    type: Types.ADD_NOTE,
    payload,
  }
}

export function deleteNote (payload) {
  return {
    type: Types.DELETE_NOTE,
    payload,
  }
}

export function editNote (payload) {
  return {
    type: Types.EDIT_NOTE,
    payload,
  }
}
