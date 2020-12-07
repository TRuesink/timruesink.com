import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
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
              <a href="/auth/google" className="ui google plus button">
                <i className="google icon"></i>
                Sign in with Google
              </a>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="item">
              <a href="/" className="ui button">
                <i className="user icon"></i>
                My Dashboard
              </a>
            </div>
            <div className="item">
              <a href="/api/logout" className="ui google plus button">
                <i className="google icon"></i>
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
          <Link to="/" className="active header item">
            timruesink.com
          </Link>
          <Link to="/blog" className="item">
            Blog
          </Link>
          <a className="item">Projects</a>
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
  };
};

export default connect(mapStateToProps, { fetchUser })(Navbar);
