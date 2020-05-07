import { connect } from 'react-redux';
import Artist from './artist';
import { fetchEvents, fetchUserFollows } from "../../actions/user_actions";
import { followArtist, unfollowArtist } from "../../actions/fav_and_follow_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  const artistId = ownProps.match.params.artistId;

  return {
    favorites: state.user.userFavorites,
    follows: state.user.userFollows,
    currentUser: state.session.user,
    errors: state.errors.session,
    artistId: artistId,
    events: state.events.data,
  };
};

const mDTP = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchUserFollows: (userId) => dispatch(fetchUserFollows(userId)),
  followArtist: (userId, artistId) => dispatch(followArtist(userId, artistId)),
  unfollowArtist: (userId, artistId) => dispatch(unfollowArtist(userId, artistId)),
  openModal: (field) => dispatch(openModal(field)),
});

export default connect(mSTP, mDTP)(Artist);