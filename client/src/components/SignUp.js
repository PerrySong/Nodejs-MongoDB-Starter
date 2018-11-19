import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { Redirect } from 'react-router-dom';
import { register, registerUserFailure, registerUserSuccess } from "../actions";
import { connect } from "react-redux";
import "../css/App.css";


// onSubmit(values) {
//   console.log("onSubmit");
//   if (values.password === values.confirmPassword) {
//     this.props.register(values, () => {
//       this.props.history.push("/");
//     });
//   } else {
//     <Redirect to='/signup'/>
//   }
// }

 //For any field errors upon submission (i.e. not instant check)
 const validateAndRegister = (values, dispatch) => {
   console.log("checkpoint1")

  if (values.password === values.confirmPassword) {
      return dispatch(register(values))
      .then((result) => {

        // Note: Error's "data" is in result.payload.response.data (inside "response")
        // success's "data" is in result.payload.data
        if (result.payload.response && result.payload.response.status !== 200) {
          dispatch(registerUserFailure(result.payload.response.data));
          throw new SubmissionError(result.payload.response.data);
        }

        //Store JWT Token to browser session storage 
        //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
        //sessionStorage = persisted only in current tab
        sessionStorage.setItem('jwttoken', result.payload.data.jwtToken);
        //let other components know that everything is fine by updating the redux` state
        dispatch(registerUserSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
      });
  } else {
    //Let user know passwords dont match
    console.log("Password dont match");
    window.location.reload();
  }
 }

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

        </div>
      </div>
    );
  }

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

          <form onSubmit={handleSubmit(validateAndRegister)}>
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
              component={this.renderField}
            />

            <Field
              className="FormField__Input"
              label="Confirm Password"
              placeholder="Re-enter your password"
              name="confirmPassword"
              type="text"
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

export default reduxForm({
  form: "PostNewUser"
})(
  connect(null,{ register, registerUserFailure, registerUserSuccess })(SignUp));
