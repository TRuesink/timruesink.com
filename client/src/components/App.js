import React from "react";
import Navbar from "./Navbar";
import { Router, Route } from "react-router-dom";

import history from "../history";
import HomePage from "./home/HomePage";
import BlogPage from "./blog/BlogPage";
import Login from "./Login";
import Register from "./Register";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Navbar />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={HomePage} />
          <Route path="/blog" exact component={BlogPage} />
        </Router>
      </div>
    );
  }
}

export default App;
