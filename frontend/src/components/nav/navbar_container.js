import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions'
import { searchConcerts, clearSearchResults} from "../../actions/search_actions";
import { fetchUserFavorites } from '../../actions/user_actions'

import NavBar from "./navbar";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
  userConcerts: state.entities.concerts.userConcerts.data,
  userFavorites: state.user.userFavorites
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal),
  searchConcerts: search => dispatch(searchConcerts(search)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  fetchUserFavorites: (id) => dispatch(fetchUserFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
