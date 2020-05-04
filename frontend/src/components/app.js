import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Redirect, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import DiscoverContainer from './discover/discover_container'
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import FavoriteContainer from "./main/favorite_container";
import VenueContainer from "./main/venue_container";
import ArtistContainer from "./artist/artist_container";
import EventContainer from "./main/event_container";
// import ArtistContainer from "./main/artist_container";
// import EventContainer from "./event/event_show_container";
import Modal from './modal/modal'
import Errors from './errors'
import "../stylesheets/main.scss";
import '../stylesheets/reset.css';
import "../stylesheets/nav.scss";
import "../stylesheets/artist.scss"
import "../stylesheets/venue.scss"
import "../stylesheets/errors.scss"


const App = () => (
  <div>
    <Errors />
    <Modal />
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/discover" component={DiscoverContainer} />
      <ProtectedRoute path="/my_favorites" component={FavoriteContainer} />
      <ProtectedRoute path="/my_venues" component={VenueContainer} />
      <Route path="/events/:eventId" component={EventContainer} />
      {/* <ProtectedRoute path="/my_artists" component={ArtistContainer} /> */}
      {/* <Route path="/artists" component={ArtistContainer} /> */}
      <Redirect to="/" /> 
    </Switch>
  </div>
);

export default App;
