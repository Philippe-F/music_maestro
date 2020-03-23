import React from 'react'
import DiscoverContainer from '../discover/discover_container'
import { Link } from 'react-router-dom'
import DiscoverItem from '../discover/discover_item'

class Event extends React.Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  handleFavorite() {
    const userId = this.props.currentUser._id
    const eventId = this.props.event._id
  }

  render() {
    if (this.props.event) {
      const { event } = this.props
      return (
        <div className="responsive">
          <div className="discover-wrapper">
            <div className="discover">
              <DiscoverItem key={event._id} event={event} />
              <div className="action-buttons">
                <button
                  onClick={() => this.handleFavorite()}
                  className="form-button action-button"
                  >
                  <div className="img-wrapper">
                    <i className="far fa-star" id="artist-star"></i>
                  </div>
                  <span>Favorite</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Event