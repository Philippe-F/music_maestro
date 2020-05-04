import { connect } from "react-redux";
import React from "react";
import { clearErrors } from "../actions/session_actions";

class Errors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: "slide-in",
      errCount: 0,
    };
  }

  closeErrors() {
    return () => this.props.clearErrors();
  }

  render() {
    let slide = null;
    let errorMessages = this.props.errors;
    if (this.props.errors.length > 0) slide = this.state.slide;
    if (this.props.errors.length > 2)
      errorMessages = ["Looks like you missed some things"];
    let errs = errorMessages.map((err, i) => (
      <li className="message" key={i}>
        {err}
      </li>
    ));
    return (
      <div className={`err-flash-messages ${slide}`}>
        <div className="error-content">
          <ul className="message-list">{errs}</ul>
          <button className="dismiss" onClick={this.closeErrors()}>
            <i className="fas fa-times close-icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => ({
  errors: Object.values(state.errors.session),
});

const mDTP = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(Errors);
