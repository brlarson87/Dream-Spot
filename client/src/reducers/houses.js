import { 
    HOUSES_LOADED
 } from '../actions/houses'

const initialState = {
houses: [],
loading: true
};

export default function authReducer(state = initialState, action) {
const { type, payload } = action;

switch (type) {
 case HOUSES_LOADED: {
     return {
         ...state,
         houses: payload,
         loading: false
     }
 }
 default:
   return state;
}
}