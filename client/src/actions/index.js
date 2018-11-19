import axios from 'axios';
// import { AUTH_USER, AUTH_ERROR } from './types';
// import jsxToString from 'jsx-to-string';
const root_Url = "/api";
const queryUser = "?userId=";
export const USER_LIST = 'user_list';
export const USER = 'user';
export const EXISTING_USER = 'existing_user';
export const NEW_USER = 'new_user';

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

  console.log(request);

  return {
      type: USER,
      payload: request
  }
}
  /**
   * Sign a user in 
   * 
   * How do I add items into the body
   */
  export function signIn(values) {
      console.log(values.username);
      console.log(values.password);
      const request = axios(`${root_Url}/login`, {
        username: values.username,
        password: values.password
      });

    return {
        type: EXISTING_USER,
        payload: request
    }
  }

  /**
   * Sign up a new user
   */
  export function signUp() {
      const request = axios.post();

      return {
          type: NEW_USER,
          payload: request
      }
  }