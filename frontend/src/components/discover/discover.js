import React from "react";
import DiscoverItem from "./discover_item";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.aggregateEvents = this.aggregateEvents.bind(this);
    this.userEvents = this.userEvents.bind(this);
    this.allEvents = this.allEvents.bind(this);
    this.createdBy = this.createdBy.bind(this);
  }

  componentDidMount() {
    const id = this.props.id;
    this.props.fetchUserFavorites(id);
    this.props.fetchEvents().then();
    this.props.fetchUserArtists(id);
    this.props.fetchUserVenues(id);
  }

  aggregateEvents() {
    let events = null;
    let artists = null;
    let venues = null;
    let userEvents = {};
    if (this.props.events && this.props.venues && this.props.artists) {
      artists = this.props.artists.data.map((artist) => {
        return artist._id;
      });
      venues = this.props.venues.data.map((venue) => {
        return venue._id;
      });
      events = this.props.events.data.map((event) => {
        if (artists.includes(event.artists[0]._id)) {
          userEvents[event._id] = event;
        } else if (venues.includes(event.venue._id)) {
          userEvents[event._id] = event;
        }
      });
      return userEvents;
    } else {
      return null;
    }
  }

  allEvents() {
    let events = null;
    if (this.props.events) {
      events = this.props.events.data.map((event) => {
        return (
          <DiscoverItem
            key={event.name}
            event={event}
            id={this.props.id}
            openModal={this.props.openModal}
          />
        );
      });
    }

    return events;
  }

  userEvents() {
    const { userFavorites } = this.props.user;
    if (userFavorites) {
      return userFavorites.map((event) => (
        <DiscoverItem key={event._id} event={event} />
      ));
    }
  }

  createdBy() {
    return (
      <div className="createdBy">
        <div className="creator-container">
          <div className="creators">JACOB MEYER</div>
          <div className="creator-links">
            <a href="https://www.linkedin.com/in/jacob-p-meyer/">
              <i id="splash-icon" className="fab fa-linkedin"></i>
            </a>
            <a href={`https://github.com/jacobpmeyer/`}>
              <i id="splash-icon" className="fab fa-github"></i>
            </a>
            <a href={`https://jacobmeyer.dev`}>
              <i id="splash-icon" className="fas fa-portrait"></i>
            </a>
          </div>
        </div>
        <div className="creator-container">
          <div className="creators">PHILIPPE FONZIN</div>
          <div className="creator-links">
            <a href="https://www.linkedin.com/in/philippe-fonzin-805701b7/">
              <i id="splash-icon" className="fab fa-linkedin"></i>
            </a>
            <a href={`https://github.com/Philippe-F`}>
              <i id="splash-icon" className="fab fa-github"></i>
            </a>
            <a href={`https://philippefonzin.dev/`}>
              <i id="splash-icon" className="fas fa-portrait"></i>
            </a>
          </div>
        </div>
        <div className="creator-container">
          <div className="creators">NICOLE OHANIAN</div>
          <div className="creator-links">
            <a href="https://www.linkedin.com/in/nicoleohanian/">
              <i id="splash-icon" className="fab fa-linkedin"></i>
            </a>
            <a href={`https://github.com/nohani`}>
              <i id="splash-icon" className="fab fa-github"></i>
            </a>
            <a href={`https://nicoleohanian.com/`}>
              <i id="splash-icon" className="fas fa-portrait"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }

  justForYou() {
    if (this.props.id) {
      return (
        <>
          <h1 className="discover-header">JUST FOR YOU</h1>
          <div className="discover-collection">{this.userEvents()}</div>
        </>
      );
    } else {
      return (
        <>
          <h1 className="discover-header">Created by</h1>
          {this.createdBy()}
        </>
      );
    }
  }

  render() {
    return (
      <div className="responsive">
        <div className="discover-wrapper">
          <div className="discover">
            {this.justForYou()}
            <h1 className="discover-header">HAPPENING SOON</h1>
            <div className="discover-collection">{this.allEvents()}</div>
          </div>
        </div>
      </div>
    );
  }
}
