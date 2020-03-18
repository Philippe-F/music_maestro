import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/reset.css';
import '../../styles/main.css';

class MainPage extends React.Component {
  render() {
    return (
      <div className="responsive">
        <div className="greeting"> 
          <h1>SEE <strong>THE BEST</strong> CONCERTS IN YOUR AREA</h1>
        </div>
        <p className="description">See the most excting shows by today's most creative artists. Sign up to 
          discover new music and shows.
        </p>
        <Link className="splash-pg-button" to='/signup'>Create Account</Link>
      </div>
    );
  }
}

export default MainPage;
