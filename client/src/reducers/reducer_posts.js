
import {USER_LIST} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {

    switch (action.type) {
        case USER_LIST:
            return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}