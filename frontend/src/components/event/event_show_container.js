import { connect } from 'react-redux'
import Event from './event_show'
import {fetchEvents} from '../../actions/user_actions'
import { favoriteEvent, unfavoriteEvent } from '../../actions/fav_and_follow_actions'

const mSTP = (state, ownProps) => {
  let eventProp = null
  if (state.events.data) {
    state.events.data.map((e) => {
      if (e._id === ownProps.match.params.eventId) eventProp = e
    })
  }
  return {
    event: eventProp,
    currentUser: state.session.user
  }
}

const mDTP = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  favoriteEvent: (userId, eventId) => dispatch(favoriteEvent(userId, eventId)),
  unfavoriteEvent: (userId, eventId) => dispatch(unfavoriteEvent(userId, eventId)),
})

export default connect(mSTP, mDTP)(Event)