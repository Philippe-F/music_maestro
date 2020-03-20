import { connect } from "react-redux";
import MainPage from "./main_page";
import { fetchEvents } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    events: () => dispatch(fetchEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
