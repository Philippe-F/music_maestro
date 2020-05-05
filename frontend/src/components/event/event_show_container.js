import { connect } from "react-redux";
import Event from "./event_show";
import { fetchEvents, fetchUserFavorites } from "../../actions/user_actions";
import {
  favoriteEvent,
  unfavoriteEvent,
} from "../../actions/fav_and_follow_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  console.log(state.events);
  let eventProp = null;
  if (state.events.data) {
    state.events.data.forEach((e) => {
      if (e._id === ownProps.match.params.eventId) eventProp = e;
    });
  }
  return {
    eventId: ownProps.match.params.eventId,
    event: eventProp,
    // event: ownProps.match.params.eventId,
    currentUser: state.session.user,
    favorites: state.user.userFavorites,
  };
};

const mDTP = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  favoriteEvent: (userId, eventId) => dispatch(favoriteEvent(userId, eventId)),
  unfavoriteEvent: (userId, eventId) =>
    dispatch(unfavoriteEvent(userId, eventId)),
  fetchUserFavorites: (userId) => dispatch(fetchUserFavorites(userId)),
  openModal: (field) => dispatch(openModal(field)),
});

export default connect(mSTP, mDTP)(Event);
