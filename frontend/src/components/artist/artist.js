import React from 'react'
import DiscoverItem from '../discover/discover_item'
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

  // getArtistDetails() {
  //   let artists = this.getArtist();
  //   let artistId = this.props.artistId;
    
  //   for (let i = 0; i < artists.length; i++) {
  //     let artist = artists[i];
  //     if (artistId === artist._id) {
  //       return <DiscoverItem key={artist._id} name={artist.name} image={artist.img} />;
  //       break
  //     } else {
  //       continue
  //     }
  //   }
  // }

  render() {
    const arr = this.getArtistDetails();

    console.log("names", arr)
    return (
          <div className="responsive">
            <div className="discover-wrapper">
              <div className="discover">
                <div className="artist-metadata">
                  <div className="artist-poster">
                    {/* image tag goes here className="artist-image" */}
                    <DiscoverItem/>
                  </div>
                  <div className="text-wrapper">
                    <div className="artist-info">
                      Artist Name
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
                <h1 className="discover-header">Artist Component</h1>
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