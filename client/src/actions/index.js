import axios from 'axios';
// import { AUTH_USER, AUTH_ERROR } from './types';
// import jsxToString from 'jsx-to-string';
const root_Url = "/api";
const queryUser = "?userId=";
export const USER_LIST = 'user_list';
export const USER = 'user';
export const EXISTING_USER = 'existing_user';



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
 * @param  id 
 */
export function getUser(userId) {
  const request = axios.get(`${root_Url}/user${queryUser}${userId}`)

  console.log( request)
  return {
      type: USER,
      payload: request
  }
}

  /**
   * Sign a user in 
   */
  export function signIn() {
      const request = axios.post(`${root_Url}/login`);

    return {
        type: EXISTING_USER,
        payload: request
    }
  }