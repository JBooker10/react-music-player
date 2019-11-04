import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./config/history";

import AuthState from "./context/auth/AuthState";
import LibraryState from "./context/library/LibraryState";
import MusicState from "./context/music/MusicState";

import Login from "./components/Views/Login";
import Home from "./components/Views/Home";
import Albums from "./components/Views/Albums";
import Tracks from "./components/Views/Tracks";
import PrivateRoute from "./components/Utils/PrivateRoute";
import { AuthorizeToken } from "./config/AuthorizeToken";

import "./App.css";

if (localStorage.token) {
  console.log(localStorage.token, "hello");
  AuthorizeToken(localStorage.token);
}

const App: React.FC = () => {
  return (
    <AuthState>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <LibraryState>
            <MusicState>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/albums" component={Albums} />
              <PrivateRoute exact path="/tracks" component={Tracks} />
            </MusicState>
          </LibraryState>
        </Switch>
      </Router>
    </AuthState>
  );
};

export default App;
