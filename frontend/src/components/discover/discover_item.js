import React from 'react'
import { Link } from 'react-router-dom'

class DiscoverItem extends React.Component {

  render() {
    const { venue, artists, name, eventDate } = this.props.event
    const artist = artists[0]
    const date = new Date(eventDate).toDateString()
    // console.log(artist._id, venue._id)
    return (
      <div className="discover-item-wrapper">
        <div className="">
          <div className="show-card">
            <Link
              to={`/events/${this.props.event._id}`}
              className="show-thumbnail"
            >
              <div
                className="venue-thumb-height"
                style={{ backgroundImage: `url(${venue.img})` }}
              >
                <div className="event-artist">{artist.name}</div>
              </div>
            </Link>
            <div className="show-body">
              <Link to={`/artists/${artist._id}`} className="poster-image">
                <div
                  className="artist-thumb-height"
                  style={{ backgroundImage: `url(${artist.img})` }}
                >
                  &nbsp;
                </div>
              </Link>
              <Link to={`/venues/${venue._id}`} className="info">
                <div className="description-metadata">
                  <h1>{venue.name}</h1>
                </div>
                <div className="details-metadata">{name}</div>
                <div className="details-metadata">{date}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverItem