
import {USER_LIST, GET_USER, NEW_USER} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case USER_LIST:
            return action.payload.data;

        case GET_USER:
        //return a key value pair 
        //where action.payload.data.userid is the key 
        //we add it into the overall state object
        //TODO: change from "id" to "userId"
        // console.log(action.payload.data);
            return { ...state, [action.payload.data.userId]: action.payload.data}
            
    default:
        return state;
    }
}

