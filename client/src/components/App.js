import React from "react";
import Navbar from "./Navbar";
import { Router, Route } from "react-router-dom";

import history from "../history";
import PostList from "./blog/PostList";
import HomePage from "./home/HomePage";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Navbar />
          <Route path="/" exact component={HomePage} />
          <Route path="/blog" exact component={PostList} />
        </Router>
      </div>
    );
  }
}

export default App;
