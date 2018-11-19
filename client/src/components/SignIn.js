import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../actions";
import { connect } from "react-redux";
import "../css/App.css";

//reduxForm handles the state of our form

class SignIn extends Component {

  renderField(field) {
    const { meta } = field;

    return (
      <div className="FormField">
        <div className="FormField">
          <label className="FormField__Label">{field.label}</label>
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

  /**
   * If sign in not valid, redirect
   * @param values 
   */
  onSubmit(values) {
    console.log(values);

    this.props.login(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    //handleSubmit is a property passed to this.props from reduxForm
    //we use this so that
    //When a form is submitted, if there are no errors,
    //onSubmit will be called

    const {asyncValidating, handleSubmit, submitting} = this.props;
    return (
      <div className="App">
        <div className="App__Aside" />

        <div className="App__Form">
          <div className="FormTitle">
            <Link
              to="/signin"
              className="FormTitle__Link FormTitle__Link--Active"
            >
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
              name="username"
              type="text"
              label="Username"
              placeholder="Enter your username"
              component={this.renderField}
            />
            <Field
              className="FormField__Input"
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              component={this.renderField}
            />
            <div className="FormField">
              <button 
              type="submit"
              className="FormField__Button mr-20"
              disabled={submitting}
              > Sign In </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

//For any field errors upon submission (i.e. not instant check)
// const validateAndSignInUser = (values, dispatch) => {
//   return dispatch(login(values))
//     .then((result) => {
//       // Note: Error's "data" is in result.payload.response.data (inside "response")
//       // success's "data" is in result.payload.data
//       if (result.payload.response && result.payload.response.status !== 200) {
//         dispatch(signInUserFailure(result.payload.response.data));
//         throw new SubmissionError(result.payload.response.data);
//       }

//       //Store JWT Token to browser session storage 
//       //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
//       //sessionStorage = persisted only in current tab
//       sessionStorage.setItem('jwtToken', result.payload.data.token);
//       //let other components know that everything is fine by updating the redux` state
//       dispatch(signInUserSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
//     });
// };

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
  form: "PostExistingUser",
  validate
})(
  connect(
    null,
    { login }
  )(SignIn)
);
