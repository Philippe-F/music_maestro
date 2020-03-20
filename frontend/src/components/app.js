import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import DiscoverContainer from './discover/discover_container'
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Modal from './modal/modal'
import Errors from './errors'
import "../stylesheets/main.scss";
import '../stylesheets/reset.css';
import "../stylesheets/nav.scss";
import ArtistContainer from './artist/artist_container'

const App = () => (
  <div>
    <Errors />
    <Modal />
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={ArtistContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/discover" component={DiscoverContainer} />
    </Switch>
  </div>
);

export default App;
