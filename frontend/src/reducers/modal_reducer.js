import { OPENMODAL, CLOSEMODAL } from '../actions/modal_actions'

const ModalReducer = (state = null, action) => {
  switch (action.type) {
    case OPENMODAL:
      return action.modal
    case CLOSEMODAL:
      return null
    default:
      return state
  }
}

export default ModalReducer