import React from 'react'
import DiscoverItem from '../discover/discover_item'
class Artist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="responsive">
            <div className="discover-wrapper">
              <div className="discover">
                <div className="artist-metadata">
                  <div className="artist-poster">
                    {/* image tag goes here className="artist-image" */}
                    artist poster
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
                  <DiscoverItem />
                  <DiscoverItem />
                  <DiscoverItem />
                  <DiscoverItem />
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Artist;