import React from "react";
import DiscoverItem from "./discover_item";
import AboutPage from "../about/About_page";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.userEvents = this.userEvents.bind(this);
    this.allEvents = this.allEvents.bind(this);
    this.createdBy = this.createdBy.bind(this);
  }

  componentDidMount() {
    const id = this.props.id;
    if (this.props.id) {
      this.props.fetchUserFavorites(id);
    }
    this.props.fetchEvents().then();
    // this.props.fetchUserArtists(id);
    // this.props.fetchUserVenues(id);
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
        <DiscoverItem
          key={event._id}
          event={event}
          id={this.props.id}
          openModal={this.props.openModal}
        />
      ));
    }
  }

  createdBy() {
    return;
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
      return null;
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
