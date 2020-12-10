import React from "react";
import { reduxForm, Field } from "redux-form";
import Modal from "./Modal";
import history from "../history";
import { registerUser, buttonLoading } from "../actions";
import { connect } from "react-redux";

class Register extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.registerUser(formValues);
    this.props.buttonLoading("LOADING");
  };
  componentDidMount() {
    this.props.buttonLoading("NOT_LOADING");
  }
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
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form"
            >
              <div className="field">
                <label>First Name</label>
                <Field name="first" component={this.renderInput} />
              </div>
              <div className="field">
                <label>Last Name</label>
                <Field name="last" component={this.renderInput} />
              </div>
              <div className="field">
                <label>Email</label>
                <Field name="email" component={this.renderInput} />
              </div>
              <div className="field">
                <label>Password</label>
                <Field name="password" component={this.renderInput} />
              </div>
              <button className={`ui button ${this.props.button} primary`}>
                Register
              </button>
            </form>
          </div>
          <div className="middle aligned column">
            <a href="/auth/google" className="ui google plus button">
              <i className="google icon"></i>
              Sign Up With Google
            </a>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Modal
          title="Register"
          content={this.renderContent()}
          action={this.renderAction()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    button: state.button,
  };
};

Register = reduxForm({
  form: "registerForm",
})(Register);

export default connect(mapStateToProps, { registerUser, buttonLoading })(
  Register
);
