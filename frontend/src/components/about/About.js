import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="favorites-selection">
      <div className="favorites-header">CREATED BY</div>
      <hr></hr>
      <div className="user-dropdown-item">
        <h3 className="user-dropdown-title">JACOB MEYER</h3>
        <div className="user-dropdown-description">
          <a href="https://www.linkedin.com/in/jacob-p-meyer/">
            <i id="about-icon" className="fab fa-linkedin"></i>
          </a>
          <a href={`https://github.com/jacobpmeyer/`}>
            <i id="about-icon" className="fab fa-github"></i>
          </a>
          <a href={`https://jacobmeyer.dev`}>
            <i id="about-icon" className="fas fa-portrait"></i>
          </a>
        </div>
      </div>
      <div className="user-dropdown-item">
        <h3 className="user-dropdown-title">PHILIPPE FONZIN</h3>
        <div className="user-dropdown-description">
          <a href="https://www.linkedin.com/in/philippe-fonzin-805701b7/">
            <i id="about-icon" className="fab fa-linkedin"></i>
          </a>
          <a href={`https://github.com/Philippe-F`}>
            <i id="about-icon" className="fab fa-github"></i>
          </a>
          <a href={`https://philippefonzin.dev/`}>
            <i id="about-icon" className="fas fa-portrait"></i>
          </a>
        </div>
      </div>
      <div className="user-dropdown-item">
        <h3 className="user-dropdown-title">NICOLE OHANIAN</h3>
        <div className="user-dropdown-description">
          <a href="https://www.linkedin.com/in/nicoleohanian/">
            <i id="about-icon" className="fab fa-linkedin"></i>
          </a>
          <a href={`https://github.com/nohani`}>
            <i id="about-icon" className="fab fa-github"></i>
          </a>
          <a href={`https://nicoleohanian.com/`}>
            <i id="about-icon" className="fas fa-portrait"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

// mapFavoritesToItems() {
//     const { userFavorites } = this.props;
//     if (userFavorites) {
//       const favItems = this.props.userFavorites.map((fav) => {
//         const date = new Date(fav.eventDate).toDateString();
//         return (
//           <Link to={`/events/${fav._id}`}>
//             <div className="user-dropdown-item">
//               <h3 className="user-dropdown-title">{fav.name}</h3>
//               <p className="user-dropdown-description">{date}</p>
//             </div>
//           </Link>
//         );
//       });
//       return favItems;
//     } else {
//       return null;
//     }
//   }
