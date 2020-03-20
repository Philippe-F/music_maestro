import { connect } from "react-redux";
import MainPage from "./main_page";
import { fetchUserFavorites } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    favorites: userId => dispatch(fetchUserFavorites(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
