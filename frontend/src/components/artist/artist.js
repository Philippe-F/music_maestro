import React from 'react';

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.artistName = this.getArtist.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
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

  handleFavorite() {
    const userId = this.props.currentUser.id;
    const artistId = this.getArtistId();
    const favIds = this.props.favorites.map((fav) => {
      //there is no follows action
      return fav._id;
    });
    if (this.props.favorites.includes(artistId) || favIds.includes(artistId)) {
      this.props.unfollowArtist(userId, artistId);
    } else {
      this.props.followArtist(userId, artistId);
    }
  }

  star() {
    const eventId = this.props.event._id;
    const favIds = this.props.favorites.map((fav) => {
      return fav._id;
    });
    if (this.props.favorites.includes(eventId) || favIds.includes(eventId)) {
      return (
        <div className="img-wrapper">
          <i className="fas fa-star" id="artist-star"></i>
        </div>
      );
    } else {
      return (
        <div className="img-wrapper">
          <i className="far fa-star" id="artist-star"></i>
        </div>
      );
    }
  }

  render() {
    const name = this.getArtistName();
    const id= this.getArtistId();
    const image= this.getArtistImage();

    console.log("names", image)
    return (
          <div className="responsive">
            <div className="discover-wrapper">
              <div className="discover">
                <div className="artist-metadata">
                  <div className="artist-poster">
                    {/* image tag goes here className="artist-image" */}
                    <img src={image} />
                  </div>
                  <div className="text-wrapper">
                    <div className="artist-info">
                      <h2>{name}</h2>
                    </div>
                    <div className="action-buttons">
                      <button className="form-button action-button">
                        <div className="img-wrapper">
                          <i class="far fa-star" id="artist-star"></i>
                        </div>
                        <span>Favorite</span>
                      </button>
                    </div>
                  </div>
                </div>
                <h1 className="discover-header">Upcoming Shows</h1>
                <div className="discover-collection">
                  {/* <DiscoverItem />
                  <DiscoverItem />
                  <DiscoverItem />
                  <DiscoverItem /> */} 
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Artist;