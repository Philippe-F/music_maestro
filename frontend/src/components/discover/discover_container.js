import { connect } from 'react-redux'
import Discover from './discover'
import { fetchEvents } from '../../actions/user_actions'

const mSTP = state => {
  return {
    events: state.user.events
  }
}

const mDTP = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
})

export default connect(mSTP, mDTP)(Discover)