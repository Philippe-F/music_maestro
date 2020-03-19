import React from 'react';

export default class SearchBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit () {
    this.props.searchConcerts(this.state.search);
  }


  render() {
    return (
      <div className="searchbar">
        <form>
          <input type="text" 
                value={this.state.search} 
                placeholder="Name of artist or venue" 
                onChange={this.update("search")} />
          <input type="submit" value="Search" onClick={this.handleSubmit}/>
        </form>
      </div>
      )  
  }
}