import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { signUp } from "../actions";
import { connect } from "react-redux";

import "../css/App.css";

class SignUp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Aside" />

        <div className="App__Form">
          <div className="FormTitle">
            <Link to="/signin" className="FormTitle__Link">
              SignIn
            </Link>
            or
            <Link to="/signup" className="FormTitle__Link FormTitle__Link--Active">
              SignUp
            </Link>
          </div>

          <div className="FormField">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="FormField__Input"
                  placeholder="Enter your username"
                  name="username"
                />
              </div>
            </form>
          </div>

          <div className="FormField">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label">
                  E-mail
                </label>
                <input
                  type="text"
                  id="email"
                  className="FormField__Input"
                  placeholder="Enter your email"
                  name="useremailname"
                />
              </div>
            </form>
          </div>

          <div className="FormField">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  className="FormField__Input"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>
            </form>
          </div>

          <div className="FormField">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  id="confirm"
                  className="FormField__Input"
                  placeholder="Re-enter your password"
                  name="confirm"
                />
              </div>
            </form>
          </div>

          <div className="FormField">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label">
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="linkedin"
                  className="FormField__Input"
                  placeholder="Enter your linkedin"
                  name="linkedin"
                />
              </div>
            </form>
          </div>

          <div className="FormField">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label">
                  Github
                </label>
                <input
                  type="text"
                  id="Github"
                  className="FormField__Input"
                  placeholder="Enter your Github"
                  name="Github"
                />
              </div>
            </form>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20"> Sign Up </button>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "PostNewUser"
})(
  connect(null,{signUp})(SignUp));
