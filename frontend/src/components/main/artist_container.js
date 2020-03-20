import { connect } from "react-redux";
import MainPage from "./main_page";
import { fetchUserArtists} from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    artist: userId => dispatch(fetchUserArtists(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
