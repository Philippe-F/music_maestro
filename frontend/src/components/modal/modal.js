import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import { openModal, closeModal } from "../../actions/modal_actions";

class Modal extends React.Component {
  render() {
    const { modal, closeModal } = this.props;
    if (!modal) {
      return null;
    }
    let activeSignIn = null;
    let activeSignUp = null;
    let component = null;
    switch (modal) {
      case "login":
        component = <LoginFormContainer />;
        activeSignIn = "active";
        break;
      case "signup":
        component = <SignupFormContainer />;
        activeSignUp = "active";
        break;
      default:
        return null;
    }

    return (
      <div onClick={closeModal} className="overlay">
        <div className="content-wrapper">
          <div className="content">
            {/* <button
              onClick={this.openUserModal}
              className={`modal-close-button`}
            >
              <i className="fas fa-times"></i>
            </button> */}
            <div className="authentication">
              <div className="mobile-tabs">
                <button
                  className={activeSignIn}
                  onClick={() => this.props.openModal("login")}
                >
                  Sign In
                </button>
                <button
                  className={activeSignUp}
                  onClick={() => this.props.openModal("login")}
                >
                  Create Account
                </button>
              </div>
              <div
                onClick={(e) => e.stopPropagation()}
                className="auth-container"
              >
                {component}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => ({
  modal: state.ui.modal,
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(Modal);
