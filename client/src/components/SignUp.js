import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { Redirect } from 'react-router-dom';
import { register, registerUserFailure, registerUserSuccess } from "../actions";
import { connect } from "react-redux";
import "../css/App.css";

class SignUp extends Component {

  renderField(field) {
    return (
      <div className="FormField">
        <div className="FormField">
          <label className="FormField__Label">{field.label}</label>
          <input
            placeholder={field.placeholder}
            className={field.className}
            type={field.text}
            value={field.value}
            id={field.id}
            //..field.input is an object, containing a bunch of event handlers
            {...field.input}
          />
          <label className="FormField__CheckboxLabel">{field.require}</label>
        </div>
      </div>
    );
  }



  onSubmit = formProps => {
    this.props.register(formProps, () => {
      this.props.history.push('/');
    });
  };

  // onSubmit(values) {
  // console.log("onSubmit");
  // if (values.password === values.confirmPassword) {
  //   this.props.register(values, () => {
  //     this.props.history.push("/");
  //   });
  // } else {
  //   console.log("Passwords dont match");
  //   window.location.reload();
  // }
// }

  render() {
    const { handleSubmit } = this.props;
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

          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              className="FormField__Input"
              label="Username"
              placeholder="Enter your username"
              name="username"
              type="text"
              require="Length 6-30 characters with no spaces"
              component={this.renderField}
            />

            <Field
              className="FormField__Input"
              label="E-mail"
              placeholder="Enter your e-mail"
              name="email"
              type="text"
              component={this.renderField}
            />

            <Field
              className="FormField__Input"
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="password"
              id="secret"
              require="Length 8-20 characters with have upper and lower case, digits and no spaces"
              component={this.renderField}
            />

            <Field
              className="FormField__Input"
              label="Confirm Password"
              placeholder="Re-enter your password"
              name="confirmPassword"
              type="text"
              require="Length 8-20 characters with have upper and lower case, digits and no spaces"
              component={this.renderField}
            />

            <Field
              className="FormField__Input"
              label="LinkedIn"
              placeholder="Enter your LinkedIn name"
              name="linkedin"
              type="text"
              component={this.renderField}
            />

            <Field
              className="FormField__Input"
              label="GitHub"
              placeholder="Enter your GitHub username"
              name="github"
              type="text"
              component={this.renderField}
            />

            <div className="FormField">
              <button 
               type="submit"
               className="FormField__Button mr-20"
              > Sign Up </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts};
}

export default reduxForm({
  form: "PostNewUser"
})(
  connect(mapStateToProps ,{ register, registerUserFailure, registerUserSuccess })(SignUp));
