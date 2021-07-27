import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import LandingPage from "./pages/landingPage";
import PageNotFound from "./pages/pageNotFound";
import Home from "./pages/home";
import RegisterJoke from "./pages/registerJoke";
import Footer from "./components/Footer";

axios.defaults.baseURL = "http://localhost:3001/v1";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/home" component={Home} />
        <Route path="/create" component={RegisterJoke} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
