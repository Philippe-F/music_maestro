import { connect } from 'react-redux'
import Artist from './artist'
import { fetchUserArtist } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
  const artistId = ownProps.match.params.artistId;
  // const artist = state.entities.users.follows.my_artists[artistId];

  return {
    user: state.session.user,
    errors: state.errors.session,
    artistId: artistId,
    // artist: artist
  };
};

const mDTP = dispatch => ({
  // showArtist: (userId, artistId) => dispatch(fetchUserArtist(userId, artistId))
});

export default connect(mSTP, mDTP)(Artist);