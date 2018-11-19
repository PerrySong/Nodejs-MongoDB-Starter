import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import "../css/App.css";
import { signIn } from "../actions";
import { connect } from "react-redux";
//reduxForm handles the state of our form  

class SignIn extends Component {
  renderField(field) {
    const { meta } = field;

    return (
      <div className="FormField">
        <div className="FormField">
        <label className="FormField__Label">
          {field.label}
        </label>
        <input
          placeholder={field.placeholder}
          className={field.className}
          type={field.text}
          //..field.input is an object, containing a bunch of event handlers
          {...field.input}
        />
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.signIn(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    //handleSubmit is a property passed to this.props from reduxForm
    //we use this so that 
    //When a form is submitted, if there are no errors, 
    //onSubmit will be called
        
    const { handleSubmit } = this.props;
    return (
      <div className="App">
        <div className="App__Aside" />

        <div className="App__Form">
          <div className="FormTitle">
            <Link to="/signin" className="FormTitle__Link FormTitle__Link--Active">
              SignIn
            </Link>
            or
            <Link to="/signup" className="FormTitle__Link">
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
              component={this.renderField}
            />
            <Field
              className="FormField__Input"
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="text"
              component={this.renderField}
            />
            <div className="FormField">
              <button className="FormField__Button mr-20"> Sign In </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

/**
 * Validate function is called automatically whenever a user 
 * clicks on the submit button
 * 
 * Input argument 'values' contains items that user has input into the form
 */
function validate(values) {
  //Validate the input inside values
  const errors = {};

  //if error contains anything --> redux form assumes form is invalid
  //if error is empty --> valid

  if (!values.username) {
    errors.title = "Username required";
  }

  if (!values.password) {
    errors.categories = "Password required";
  }

  return errors;
}

export default reduxForm({
  form: "PostExistingUser"
})(
  connect(null,{signIn})(SignIn));
