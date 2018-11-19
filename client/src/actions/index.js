import axios from 'axios';
// import { AUTH_USER, AUTH_ERROR } from './types';
// import jsxToString from 'jsx-to-string';
const root_Url = "/api";
const queryUser = "?userId=";
export const USER_LIST = 'USER_LIST';
export const GET_USER = 'GET_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const NEW_USER = 'NEW_USER';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';

/**
 * Get All users on Showcase 
 */
export function getAllUsers() {
    const request = axios.get(`${root_Url}/userlist`);
    return {
        type: USER_LIST,
        payload: request
    };
}

/**
 * Get one user on Showcase
 * @param  userId 
 */
export function getUser(userId) {
  const request = axios.get(`${root_Url}/user${queryUser}${userId}`)
  console.log( request)
  return {
      type: GET_USER,
      payload: request
  }
}
  /**
   * Sign a user in 
   * 
   * How do I add items into the body
   */
  export function login(values, callback) {
      
      const object = {
        username: values.username,
        password: values.password,
      }

      const request = axios(`${root_Url}/login`, object)
      .then(() => callback());

    return {
        type: LOGIN_USER,
        payload: request
    }
  }

  /**
   * Sign up a new user
   */
  export function register(values, callback) {
      
      const object = {
        username: values.username,
        email: values.email,
        password: values.password,
        linkedin:values.linkedin,
        github:values.github
      }
      
      const request = axios.post(`${root_Url}/register`, object)
      .then(() => callback());
      
      return {
          type: NEW_USER,
          payload: request
      }
  }

  export function registerUserFailure(error) {
    return {
      type: REGISTER_USER_FAILURE,
      payload: error
    };
  }

  export function registerUserSuccess(user) {
    return {
      type: REGISTER_USER_SUCCESS,
      payload: user
    };
  }