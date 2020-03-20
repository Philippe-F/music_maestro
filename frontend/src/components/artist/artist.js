import React from 'react'
import DiscoverItem from '../discover/discover_item'
class Artist extends React.Component {

  render() {
    return (
      <div className="responsive">
        <div className="discover-wrapper">
          <div className="artist">
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
    )
  }
}

export default Artist