import { connect } from 'react-redux'
import Artist from './artist'
import { fetchEvents } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
  const artistId = ownProps.match.params.artistId;

  return {
    errors: state.errors.session,
    artistId: artistId,
    events: state.events.data,
  };
};

const mDTP = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mSTP, mDTP)(Artist);