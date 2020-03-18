import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      stateOpen: null
    }
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.openUserModal = this.openUserModal.bind(this)
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-content">
          <div className="nav-content">
            <button onClick={this.logoutUser}>Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav">
          <div className="nav-content">
            <i class="fas fa-search"></i>
            <Link to={"/signup"}>Signup</Link>
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
      );
    }
  }

  userDropdown() {
    if (this.state.dropdownOpen) {
      return (
        <div className="dropdown-header">
          <button onClick={this.openUserModal} className={`close-button`}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      )
    }
  }

  openUserModal() {
    if (this.state.dropdownOpen) {
      return (
        this.setState({ 
          dropdownOpen: false,
          stateOpen: null
        })
      )
    } else {
      return (
        this.setState({ 
          dropdownOpen: true,
          stateOpen: "state-open"
        })
      )
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-content">
          
          <div className="nav-left">
            <i className="fas fa-search"></i>
          </div>
          <div className="nav-center">
            MM
          </div>
          <div className="nav-right"> 
            <button onClick={this.openUserModal}>
              <i className="fas fa-user"></i>
            </button>
            {this.userDropdown()}
            <div className={`user-dropdown ${this.state.stateOpen}`}>
              <div className="user-dropdown-item">
                <h3 className="user-dropdown-title">Create Account</h3>
                <p className="user-dropdown-description">Join for free</p>
              </div>
              <div className="user-dropdown-item">
                <h3 className="user-dropdown-title">Sign In</h3>
                <p className="user-dropdown-description">Already joined Music Maestro? Welcome Back!</p>
              </div>
            </div>
          </div>
          <div className="nav-bottom-bar">
            &nbsp;
          </div>
        </div>
        <div className={`page-overlay ${this.state.stateOpen}`}>

        </div>
      </div>
    );
  }
}

export default NavBar;
