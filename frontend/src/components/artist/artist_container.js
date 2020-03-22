import { connect } from 'react-redux'
import Artist from './artist'
import { fetchUserArtists } from "../../actions/user_actions";

const mSTP = state => ({
  user: state.session.user,
  errors: state.errors.session
});

const mDTP = dispatch => ({
  artist: userId => dispatch(fetchUserArtists(userId))
});

export default connect(mSTP, mDTP)(Artist);