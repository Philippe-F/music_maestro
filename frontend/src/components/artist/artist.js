import React from 'react';
// import DiscoverItem from "../discover/discover_item";

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.flag = null; 
  }

  componentDidMount() {
    this.props.fetchEvents();
    if (this.props.currentUser) {
      this.props.fetchUserFollows(this.props.currentUser.id);
    }
    this.setState({
      follows: this.props.follows,
    });
  }

  componentDidUpdate() {
    if (this.flag === true) {
      this.props.fetchUserFollows(this.props.currentUser.id);
      this.flag = null;
    }
  }

  getArtist() {
    let nameArr = null;
    let names = [];
    if (this.props.events) {
      nameArr = this.props.events.map((data) => {
        nameArr = data.artists;

        for (let i = 0; i < nameArr.length; i++) {
          if (!(nameArr[0] === undefined)) names.push(nameArr[0]);
          if (!(nameArr[1] === undefined)) names.push(nameArr[1]);
        }
      });
    }

    return names;
  }

  getArtistId() {
    let artists = this.getArtist();
    let artistId = this.props.artistId;
    for (let i = 0; i < artists.length; i++) {
      let artist = artists[i];
      if (artistId === artist._id) {
        return artist._id;
      } 
    }
  }
  
  getArtistName() {
    let artists = this.getArtist();
    let artistId = this.props.artistId;
    for (let i = 0; i < artists.length; i++) {
      let artist = artists[i];
      if (artistId === artist._id) {
        return artist.name;
      } 
    }
  }

  getArtistImage() {
    let artists = this.getArtist();
    let artistId = this.props.artistId;
    for (let i = 0; i < artists.length; i++) {
      let artist = artists[i];
      if (artistId === artist._id) {
        return artist.img;
      } 
    }
  }

  handleFollow() {
    const userId = this.props.currentUser.id;
    const artistId = this.getArtistId();
    const followIds = this.props.follows.map((artist) => {

      return artist._id;
    });
    if (this.props.follows.includes(artistId) || followIds.includes(artistId)) {
      this.props.unfollowArtist(userId, artistId);
      this.flag = true;
    } else {
      this.props.followArtist(userId, artistId);
      this.flag = true;
    }
  }

  follow() {
    if (!this.props.follows) return;
    const artistId = this.getArtistId();
    const followIds = this.props.follows.map((artist) => {
      return artist._id;
    });
    if (this.props.follows.includes(artistId) || followIds.includes(artistId)) {
      return (
        <div className="action-buttons">
          <button
            onClick={() => this.handleFollow()}
            className="form-button action-button"
          >
            <div className="img-wrapper">
              <i className="fas fa-star" id="artist-star"></i>
            </div>
            <span>Unfollow</span>
          </button>
        </div>
      );
    } else {
      return (
        <div className="action-buttons">
          <button
            onClick={() => this.handleFollow()}
            id="action-button-grey"
            className="form-button action-button"
          >
            <div className="img-wrapper">
              <i className="far fa-star" id="artist-star"></i>
            </div>
            <span>Follow</span>
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
          <span>Sign In to follow</span>
        </button>
      </div>
    );
  }

  followOrLogin() {
    if (this.props.currentUser && this.props.currentUser.id) {
      return this.follow();
    } else {
      return this.signIn();
    }
  }

  render() {
    const name = this.getArtistName();
    const id = this.getArtistId();
    const image= this.getArtistImage();

    return (
      <div className="responsive">
        <div className="discover-wrapper">
          <div className="discover">
            <div className="artist-metadata">
              <div className="artist-poster">
                <img className="artist-image" src={image} />
              </div>
              <div className="text-wrapper">
                <div className="artist-info">
                  <h1>{name}</h1>
                </div>
                <div className="action-buttons">
                  {this.followOrLogin()}
                </div>
              </div>
            </div>
            {/* <h1 className="discover-header">Upcoming Shows</h1>
            <div className="discover-collection">
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;