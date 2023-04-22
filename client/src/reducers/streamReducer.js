import {
    FETCH_STREAMS,
    SHOW_STREAM,
    UPDATE_STREAM,
    CREATE_STREAM,
    DELETE_STREAM
} from '../actions/types.js';
import _ from 'lodash';
let streamReducer = (state ={}, action) => {
    switch(action.type){
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case SHOW_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        
        default:
            return state;
    }
}
export default streamReducer;