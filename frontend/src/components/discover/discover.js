import React from 'react'
import DiscoverItem from './discover_item'

export default class Discover extends React.Component{
  constructor(props) {
    super(props)
    this.aggregateEvents = this.aggregateEvents.bind(this)
    this.userEvents = this.userEvents.bind(this)
    this.allEvents = this.allEvents.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.user
    this.props.fetchEvents().then()
    this.props.fetchUserArtists(id)
    this.props.fetchUserVenues(id)
  }

  aggregateEvents() {
    let events = null;
    let artists = null;
    let venues = null;
    let userEvents = {};
    if (this.props.events && this.props.venues && this.props.artists) {
      artists = this.props.artists.data.map((artist) => {
        return artist._id
      })
      venues = this.props.venues.data.map((venue) => {
        return venue._id
      })
      events = this.props.events.data.map((event) => {
        if (artists.includes(event.artists[0]._id)) {
          userEvents[event._id] = event
        } else if (venues.includes(event.venue._id)) {
          userEvents[event._id] = event
        }
      })
      return userEvents
    } else {
      return null
    }
  }

  allEvents() {
    let events = null
    if (this.props.events) {
      events = this.props.events.data.map((event) => {
        return (
          <DiscoverItem key={event.name} event={event} />
        )
      })
    }

    return events
  }

  userEvents() {
    const userE = this.aggregateEvents()
    if (userE) {
      const events = Object.values(userE)
      const discoverEvents = events.map((event) => {
        return (
          <DiscoverItem key={event._id} event={event} />
        )
      })
      return discoverEvents
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="responsive">
        <div className="discover-wrapper">
          <div className="discover">
            <h1 className="discover-header">JUST FOR YOU</h1>
            <div className="discover-collection">
              {this.userEvents()}
            </div>
            <h1 className="discover-header">HAPPENING SOON</h1>
            <div className="discover-collection">
              {this.allEvents()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}