import { connect } from 'react-redux'
import Venue from './venue'

const mSTP = state => ({
  user: state.session.user,
})

const mDTP = dispatch => ({
  //fetch venues or shows
})

export default connect(mSTP, mDTP)(Venue)