import  { connect } from 'react-redux'
import Artist from './artist'

const mSTP = state => ({
  user: state.session.user,
})

const mDTP = dispatch => ({
  //fetch venues or shows
})

export default connect(mSTP, mDTP)(Artist)