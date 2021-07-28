import { CREATE_NEW_USER, 
         LOAD_USER, 
         LOGOUT_USER,
         LOGIN_USER,
         LOGIN_FAILED } from '../actions/auth'

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    loading: true
  };
  
  export default function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_NEW_USER:  
        localStorage.setItem("token", payload);
        return {
          ...state,
          token: payload,
          isAuthenticated: true
        };
      case LOGIN_USER:  
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true
      };  
      case LOAD_USER:
        return {
          ...state,
          user: payload,
          isAuthenticated: true,
          loading: false
        };
      case LOGOUT_USER:
      case LOGIN_FAILED:  
        localStorage.removeItem("token");
        return {
          token: null,
          isAuthenticated: null,
          user: null,
          loading: false
        };
      default:
        return state;
    }
  }