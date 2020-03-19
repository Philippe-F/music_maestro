import React from 'react'
import DiscoverItem from './discover_item'

export default class Discover extends React.Component{

  render() {
    return (
      <div className="responsive">
        <div className="discover-wrapper">
          <div className="discover">
            <h1 className="discover-header">JUST FOR YOU</h1>
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