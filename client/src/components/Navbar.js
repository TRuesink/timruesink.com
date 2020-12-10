import React from "react";
import { connect } from "react-redux";
import { fetchUser, changeNav } from "../actions";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  renderAuth() {
    return (
      <React.Fragment>
        {!this.props.auth ? (
          <React.Fragment>
            <div className="item">
              <Link to="/login" className="ui button primary">
                <i className="user icon"></i>
                Log In
              </Link>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="item">Hey {this.props.auth.first}!</div>
            <div className="item">
              <a href="/api/logout" className="ui button primary">
                <i className="user icon"></i>
                Log out
              </a>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

  renderContent() {
    return (
      <div>
        <div className="ui inverted secondary menu">
          <Link
            onClick={() => this.props.changeNav("TIM_RUESINK")}
            to="/"
            className={this.props.nav.timruesink}
          >
            timruesink.com
          </Link>
          <Link
            onClick={() => this.props.changeNav("BLOG")}
            to="/blog"
            className={this.props.nav.blog}
          >
            Blog
          </Link>
          <Link
            onClick={() => this.props.changeNav("PROJECTS")}
            to="/"
            className={this.props.nav.projects}
          >
            Projects
          </Link>
          <div className="right menu">{this.renderAuth()}</div>
        </div>
      </div>
    );
  }
  render() {
    return <div className="ui inverted segment">{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    nav: state.nav,
  };
};

export default connect(mapStateToProps, { fetchUser, changeNav })(Navbar);
