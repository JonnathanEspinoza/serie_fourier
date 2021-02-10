import {SET_TIME, SET_HUMBRAL} from '../types';

export default (state, action) => {
    const {payload, type} = action;

    switch (type) {
        case SET_TIME:
            return {
                ...state,
                time: payload
            }
        
        case SET_HUMBRAL:
            return {
                ...state,
                humbral: payload
            }
    
        default:
            return state;
            break;
    }
}