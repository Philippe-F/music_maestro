import React from 'react'
import DiscoverItem from './discover_item'

export default class Discover extends React.Component{
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchEvents()
  }

  aggregateEvents() {
    
  }

  allEvents() {
    let events = null
    if (this.props.events) {
      events = this.props.events.data.map((event) => {
        return (
          <DiscoverItem key={event.name} event={event} />
        )
      })
    }

    return events
  }

  userEvents() {
    let events = null
  }

  render() {
    this.props.events ? console.log(this.props.events.data) : console.log("hello")
    return (
      <div className="responsive">
        <div className="discover-wrapper">
          <div className="discover">
            <h1 className="discover-header">JUST FOR YOU</h1>
            <div className="discover-collection">
              {this.allEvents()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}