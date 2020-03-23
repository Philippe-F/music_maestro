import React from "react";
import { Link } from "react-router-dom";
import UserConcertItem from './user_concert_item'
import ErrorItem from './error_item'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      stateOpen: null,
      searchOpen: false,
      search: ""
    };
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.openUserModal = this.openUserModal.bind(this);
    this.formModal = this.formModal.bind(this);
    this.userHeader = this.userHeader.bind(this);
    this.search = this.search.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  clearSearch() {
    this.setState({ search: "" });
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.openUserModal();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-right">
          <button onClick={this.openUserModal}>
            <i className="fas fa-user"></i>
          </button>
          {this.userDropdown()}
          <div className={`user-dropdown ${this.state.stateOpen}`}>
            <div className="user-dropdown-item" onClick={this.logoutUser}>
              <h3 className="user-dropdown-title">Log Out</h3>
              <p className="user-dropdown-description">See you again soon!</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-right">
          <button onClick={this.openUserModal}>
            <i className="fas fa-user"></i>
          </button>
          {this.userDropdown()}
          <div className={`user-dropdown ${this.state.stateOpen}`}>
            <div
              className="user-dropdown-item"
              onClick={() => this.formModal("signup")}
            >
              <h3 className="user-dropdown-title">Create Account</h3>
              <p className="user-dropdown-description">Join for free</p>
            </div>
            <div
              className="user-dropdown-item"
              onClick={() => this.formModal("login")}
            >
              <h3 className="user-dropdown-title">Sign In</h3>
              <p className="user-dropdown-description">
                Already joined Music Maestro? Welcome Back!
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  updateSearch() {
    return e => this.setState({ search: e.currentTarget.value });
  }

  userHeader() {
    if (this.props.loggedIn) {
      return (
        <div className="header-avatar-container">
          <div className="avatar-wrapper">{/* avatar img src here */}</div>
          <div className="username-wrapper">
            <h3 className="header-username">{this.props.user.handle}</h3>
          </div>
        </div>
      );
    }
  }

  userDropdown() {
    if (this.state.dropdownOpen) {
      return (
        <div className="dropdown-header">
          <div onClick={this.openUserModal} className={`close-button`}>
            <i className="fas fa-times"></i>
          </div>
          {this.userHeader()}
        </div>
      );
    }
  }

  openUserModal() {
    if (this.state.dropdownOpen) {
      return this.setState({
        dropdownOpen: false,
        stateOpen: null
      });
    } else {
      return this.setState({
        dropdownOpen: true,
        stateOpen: "state-open"
      });
    }
  }

  formModal(field) {
    this.props.openModal(field);
    this.openUserModal();
  }

  searchClick() {
    // console.log(this.state.searchOpen);
    if (this.state.searchOpen) {
      this.clearSearch();
      this.setState({ searchOpen: false });
    } else {
      this.clearSearch();
      this.setState({ searchOpen: true });
      this.props.clearSearchResults();
    }
  }

  handleSearch() {
    this.props.searchConcerts(this.state.search);
  }

  renderSearchResults() {

    if (this.props.userConcerts) {
      return(
           this.props.userConcerts ? (
            <ul>
              {this.props.userConcerts.map((result, i) => {
                return result.error ? (
                  <ErrorItem key={i} result={result} />
                ) : (
                  <UserConcertItem key={result.id} result={result} />
                );
              })}
            </ul> ) : null
      )
    } else {
      return null
    }
  }



  search() {
    if (this.state.searchOpen) {
      return (
        <div className="search">
          <div className="search-header-wrapper">
            <div onClick={this.searchClick} className={`close-button-search`}>
              <i className="fas fa-times close-icon"></i>
            </div>
            <div className="search-field">
              <div className="search-content">
                <div className="search-input-wrapper">
                  {/* SEARCH BAR FORM */}
                  <form onSubmit={this.handleSearch}>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="search-input"
                      value={this.state.search}
                      onChange={this.updateSearch()}
                    ></input>
                    <button
                      className="search-button"
        
                    >
                      <i className="fas fa-search search-icon"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="search-results-wrapper">
            {this.renderSearchResults()}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-content">
          <div className="nav-left" onClick={this.searchClick}>
            <i className="fas fa-search"></i>
          </div>
          <Link to={"/"} className="nav-center">
            MM
          </Link>
          {this.getLinks()}
          <div className="nav-bottom-bar">&nbsp;</div>
        </div>
        <div className={`page-overlay ${this.state.stateOpen}`}></div>
        {this.search()}
      </div>
    );
  }
}

export default NavBar;
