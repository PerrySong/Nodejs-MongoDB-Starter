import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';
import jsxToString from 'jsx-to-string';
const root_Url = "http://api";
export const USER_LIST = 'user_list';
export const USER = 'user';

/**
 * Get All users on Showcase 
 */
export function getAllUsers() {
    const request = axios.get(`${root_Url}/userlist`)

    return {
        type: USER_LIST,
        payload: request
    };
}

/**
 * Get one user on Showcase
 * @param  id 
 */
export function getUser(id) {
  const request = axios.get(`${root_Url}/userlist/${id}`)

  return {
      type: USER,
      payload: request
  }
}