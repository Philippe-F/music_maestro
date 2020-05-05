import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import Discover from "../discover/discover_container";
import Map from "../search/map";

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
          <div className="splash-img-container">
            <img
              className="splash-img"
              src="https://musicmaestro-seed.s3.us-east-2.amazonaws.com/outdoor.jpg"
              alt=""
            />
          </div>
          <p className="description lg">
            Wanna see the stuff happening soon? Scroll down.
            <br />
            Looking for something in particular? Click on the magnifying glass
            to search for shows and concerts by artist name, venue, or tour
            name.
            <br />
            See something you like and don't want to forget it? Click on an
            event, then click the favorite button.
          </p>
          <div
            className="splash-pg-button"
            onClick={() => this.props.openModal("login")}
          >
            <button>Sign In</button>
          </div>

          {/* <Map />  */}
        </div>
        <Discover />
      </div>
    );
  }
}

const mSTP = (state) => ({});

const mDTP = (dispatch) => ({
  openModal: (field) => dispatch(openModal(field)),
});

export default connect(mSTP, mDTP)(MainPage);
