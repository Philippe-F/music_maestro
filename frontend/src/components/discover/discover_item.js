import React from 'react'


class DiscoverItem extends React.Component {

  render() {
    const { venue, artists, name, eventDate } = this.props.event
    const artist = artists[0]
    const date = new Date(eventDate).toDateString()
    return (
      <div className="discover-item-wrapper">
        <div className="">
          <div className="show-card">
            <div className="show-thumbnail">
              <div
                className="venue-thumb-height"
                style={{ backgroundImage: `url(${venue.img})` }}
              >
                <div className="event-artist">{artist.name}</div>
                {/* <div className="event-venue">
                  {venue.name}
                </div> */}
              </div>
            </div>
            <div className="show-body">
              <div className="poster-image">
                <div
                  className="artist-thumb-height"
                  style={{ backgroundImage: `url(${artist.img})` }}
                >
                  &nbsp;
                </div>
              </div>
              <div className="info">
                <div className="description-metadata">
                  <h1>{venue.name}</h1>
                </div>
                <div className="details-metadata">{date}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverItem