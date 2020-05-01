import React from 'react'
import DiscoverContainer from '../discover/discover_container'
import { Link } from 'react-router-dom'
import DiscoverItem from '../discover/discover_item'

class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: {}
    }
  }

  componentDidMount() {
    this.props.fetchEvents()
    this.props.fetchUserFavorites(this.props.currentUser.id)
    this.setState({
      favorites: this.props.favorites
    })
  }

  componentDidUpdate() {
    // this.props.fetchUserFavorites(this.props.currentUser.id)
  }

  handleFavorite() {
    const userId = this.props.currentUser.id
    const eventId = this.props.event._id
    const favIds = this.props.favorites.map((fav) => {
      return fav._id
    })
    if (this.props.favorites.includes(eventId) || favIds.includes(eventId)) {
      this.props.unfavoriteEvent(userId, eventId)
    } else {
      this.props.favoriteEvent(userId, eventId)
    }
  }

  star() {
    const eventId = this.props.event._id
    const favIds = this.props.favorites.map((fav) => {
      return fav._id
    })
    if (this.props.favorites.includes(eventId) || favIds.includes(eventId)) {
      return (
        <div className="img-wrapper">
          <i className="fas fa-star" id="artist-star"></i>
        </div>
      )
    } else {
      return (
        <div className="img-wrapper">
          <i className="far fa-star" id="artist-star"></i>
        </div>
      )
    }
  }

  render() {
    if (this.props.event && this.props.favorites) {
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
                  {this.star()}
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