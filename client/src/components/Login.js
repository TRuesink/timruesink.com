import React from "react";
import Modal from "./Modal";
import history from "../history";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class Login extends React.Component {
  renderAction() {
    return (
      <div>
        <button onClick={() => history.push("/")} className="ui button">
          Cancel
        </button>
      </div>
    );
  }

  renderInput({ iconName, input, meta }) {
    return (
      <div className="ui left icon input">
        <input {...input} autoComplete="off"></input>
        <i className={iconName}></i>
      </div>
    );
  }

  renderContent() {
    return (
      <div>
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <form className="ui form">
                <div className="field">
                  <label>Email</label>
                  <Field
                    name="email"
                    component={this.renderInput}
                    iconName="user icon"
                  />
                </div>
                <div className="field">
                  <label>Password</label>
                  <Field
                    name="password"
                    component={this.renderInput}
                    iconName="lock icon"
                  />
                </div>
                <button className="ui blue submit button">Login</button>
              </form>
            </div>
            <div className="middle aligned column">
              <a href="/auth/google" className="ui google plus button">
                <i className="google icon"></i>
                Sign In With Google
              </a>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
        <div className="ui horizontal section divider">Need an account?</div>
        <div className="ui grid">
          <div className="row">
            <div className="column center aligned">
              <Link to="/register" className="ui button primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Modal
          title="Login"
          content={this.renderContent()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

Login = reduxForm({
  form: "loginForm",
})(Login);

export default connect(mapStateToProps)(Login);
