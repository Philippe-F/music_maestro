import React from "react";
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Map from '../search/map';

class MainPage extends React.Component {
  render() {
    return (

      <div className="responsive">
        <div className="inside">
          <div className="greeting">
            <h1>
              SEE <strong>THE BEST</strong> CONCERTS IN YOUR AREA
            </h1>
          </div>
          <p className="description">
            See the most excting shows by today's most creative artists. Sign up
            to discover new music and shows.
          </p>
          <div
            className="splash-pg-button"
            onClick={() => this.props.openModal("signup")}
          >
            <button>Create Account</button>
          </div>

         {/* <Map />  */}
        </div>
      </div>
    );
  }
}

const mSTP = state => ({});

const mDTP = dispatch => ({
  openModal: field => dispatch(openModal(field))
});

export default connect(mSTP, mDTP)(MainPage);
