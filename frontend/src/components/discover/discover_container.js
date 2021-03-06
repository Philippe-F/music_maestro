import { connect } from "react-redux";
import Discover from "./discover";
import {
  fetchEvents,
  fetchUserArtists,
  fetchUserVenues,
  fetchUserFavorites,
} from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state) => {
  return {
    events: state.user.events,
    user: state.user,
    id: state.session.user ? state.session.user.id : null,
    artists: state.user.userArtists,
    venues: state.user.userVenues,
  };
};

const mDTP = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchUserArtists: (userId) => dispatch(fetchUserArtists(userId)),
  fetchUserVenues: (userId) => dispatch(fetchUserVenues(userId)),
  fetchUserFavorites: (userId) => dispatch(fetchUserFavorites(userId)),
  openModal: (field) => dispatch(openModal(field)),
});

export default connect(mSTP, mDTP)(Discover);
