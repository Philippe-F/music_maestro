import React from "react";
import DiscoverContainer from "../discover/discover_container";
import { Link } from "react-router-dom";
import DiscoverItem from "../discover/discover_item";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: {},
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
    if (this.props.currentUser) {
      this.props.fetchUserFavorites(this.props.currentUser.id);
    }
    this.setState({
      favorites: this.props.favorites,
    });
  }

  componentDidUpdate() {
    // this.props.fetchEvents();
  }

  handleFavorite() {
    const userId = this.props.currentUser.id;
    const eventId = this.props.event._id;
    const favIds = this.props.favorites.map((fav) => {
      return fav._id;
    });
    if (this.props.favorites.includes(eventId) || favIds.includes(eventId)) {
      this.props.unfavoriteEvent(userId, eventId);
    } else {
      this.props.favoriteEvent(userId, eventId);
    }
  }

  favorite() {
    if (!this.props.favorites) return;
    const eventId = this.props.event._id;
    const favIds = this.props.favorites.map((fav) => {
      return fav._id;
    });
    if (this.props.favorites.includes(eventId) || favIds.includes(eventId)) {
      return (
        <div className="action-buttons">
          <button
            onClick={() => this.handleFavorite()}
            className="form-button action-button"
          >
            <div className="img-wrapper">
              <i className="fas fa-star" id="artist-star"></i>
            </div>
            <span>Favorited</span>
          </button>
        </div>
      );
    } else {
      return (
        <div className="action-buttons">
          <button
            onClick={() => this.handleFavorite()}
            id="action-button-grey"
            className="form-button action-button"
          >
            <div className="img-wrapper">
              <i className="far fa-star" id="artist-star"></i>
            </div>
            <span>Favorite</span>
          </button>
        </div>
      );
    }
  }

  signIn() {
    return (
      <div className="action-buttons">
        <button
          onClick={() => this.props.openModal("login")}
          className="form-button action-button"
        >
          <div className="img-wrapper"></div>
          <span>Sign In to favorite</span>
        </button>
      </div>
    );
  }

  favoriteOrLogin() {
    if (this.props.currentUser && this.props.currentUser.id) {
      return this.favorite();
    } else {
      return this.signIn();
    }
  }

  render() {
    console.log(this.props);
    const id = this.props.currentUser ? this.props.currentUser.id : null;
    const { event } = this.props;
    if (!this.props.event) {
      return null;
    }
    return (
      <div className="responsive">
        <div className="discover-wrapper">
          <div className="discover">
            <DiscoverItem
              key={event._id}
              event={event}
              openModal={this.props.openModal}
              id={id}
            />
            {this.favoriteOrLogin()}
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
