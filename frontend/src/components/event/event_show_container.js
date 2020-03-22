import { connect } from 'react-redux'
import Event from './event_show'
import {fetchEvent} from '../../actions/event_actions'

const mSTP = (state, ownProps) => {
  let eventProp = null
  if (state.events.data) {
    eventProp = state.events.data.map((e) => {
      if (e._id === ownProps.eventId) return e
    })
  }
  return {
    event: eventProp
  }
}

const mDTP = dispatch => ({
  fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(Event)