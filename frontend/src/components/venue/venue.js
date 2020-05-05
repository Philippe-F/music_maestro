import React from "react";
import DiscoverItem from "../discover/discover_item";
class Venue extends React.Component {
  render() {
    return (
      <div className="responsive">
        <div className="discover-wrapper">
          <div className="discover">
            <div className="venue-metadata">
              <div className="venue-poster">
                {/* image tag goes here className="venue-image" */}
                venue poster
              </div>
              <div className="text-wrapper">
                <div className="venue-info">venue Name</div>
                <div className="action-buttons">
                  <button className="form-button action-button">
                    <div className="img-wrapper">
                      <i class="far fa-star" id="venue-star"></i>
                    </div>
                    <span>Favorite</span>
                  </button>
                </div>
              </div>
            </div>
            <h1 className="discover-header">Venue Component</h1>
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

export default Venue;
