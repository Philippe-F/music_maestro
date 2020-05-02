import { connect } from "react-redux";
import Discover from "./discover";
import {
  fetchEvents,
  fetchUserArtists,
  fetchUserVenues,
} from "../../actions/user_actions";

const mSTP = (state) => {
  return {
    events: state.user.events,
    user: state.user,
    artists: state.user.userArtists,
    venues: state.user.userVenues,
  };
};

const mDTP = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchUserArtists: (userId) => dispatch(fetchUserArtists(userId)),
  fetchUserVenues: (userId) => dispatch(fetchUserVenues(userId)),
});

export default connect(mSTP, mDTP)(Discover);
