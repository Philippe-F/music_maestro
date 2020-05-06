import React from "react";

const AboutPage = (props) => {
  return (
    <div className="responsive about-container">
      <h1 className="discover-header center">Created by</h1>
      <div className="createdBy">
        <div className="creator-container">
          <div className="creator-img-container">
            <img
              className="creator-img"
              src="https://musicmaestro-seed.s3.us-east-2.amazonaws.com/Profile.jpg"
              alt="jacob"
            />
          </div>
          <div className="creators">JACOB MEYER</div>
          <div className="creator-links">
            <div className="creator-img-container">
              <a href="https://www.linkedin.com/in/jacob-p-meyer/">
                LinkedIn
                <i id="splash-icon" className="fab fa-linkedin"></i>
              </a>
            </div>
            <a href={`https://github.com/jacobpmeyer/`}>
              Github
              <i id="splash-icon" className="fab fa-github"></i>
            </a>
            <a href={`https://jacobmeyer.dev`}>
              Portfolio
              <i id="splash-icon" className="fas fa-portrait"></i>
            </a>
          </div>
        </div>
        <div className="creator-container">
          <div className="creator-img-container">
            <img
              className="creator-img"
              src="https://musicmaestro-seed.s3.us-east-2.amazonaws.com/philippe.jpeg"
              alt="philippe"
            />
          </div>
          <div className="creators">PHILIPPE FONZIN</div>
          <div className="creator-links">
            <a href="https://www.linkedin.com/in/philippe-fonzin-805701b7/">
              LinkedIn
              <i id="splash-icon" className="fab fa-linkedin"></i>
            </a>
            <a href={`https://github.com/Philippe-F`}>
              Github
              <i id="splash-icon" className="fab fa-github"></i>
            </a>
            <a href={`https://philippefonzin.dev/`}>
              Portfolio
              <i id="splash-icon" className="fas fa-portrait"></i>
            </a>
          </div>
        </div>
        <div className="creator-container">
          <img
            className="creator-img"
            src="https://musicmaestro-seed.s3.us-east-2.amazonaws.com/nicole.png"
            alt="nicole"
          />
          <div className="creators">NICOLE OHANIAN</div>
          <div className="creator-links">
            <a href="https://www.linkedin.com/in/nicoleohanian/">
              LinkedIn
              <i id="splash-icon" className="fab fa-linkedin"></i>
            </a>
            <a href={`https://github.com/nohani`}>
              Github
              <i id="splash-icon" className="fab fa-github"></i>
            </a>
            <a href={`https://nicoleohanian.com/`}>
              Portfolio
              <i id="splash-icon" className="fas fa-portrait"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
