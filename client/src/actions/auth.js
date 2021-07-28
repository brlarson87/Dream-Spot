import axios from "axios";
import setAuthToken from '../utils/setAuthToken';
export const CREATE_NEW_USER = "CREATE_NEW_USER";
export const LOAD_USER = "LOAD_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_FAILED = "LOGIN_FAILED";


const config = {
    headers: {
      "Content-Type": "application/json"
    }
};


//***LOAD USER***/
export const loadUser = async () => {
    if (localStorage.getItem("token")) {
        setAuthToken(localStorage.token);
    }
    
    try {
        const res = await axios.get("http://localhost:5000/api/userAuth/");
        return { type: LOAD_USER, payload: res.data };
    } catch (error) {
        console.log('Error loading USER -- loadUser action');
        return { type: LOGOUT_USER };
    }
}

//***LOGIN USER***/
export const login = async (loginData) => {
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify(loginData);

    try {
        const res = await axios.post("http://localhost:5000/api/userAuth/", body, config);
        return { type: LOGIN_USER, payload: {token: res.data.token} }
    } catch (error) {
        console.log('Error logging in -- login action')
        return { type: LOGIN_FAILED, payload: { error: "**Incorrect email or password**" }};
    }
}

//***REGISTER USER***/
export const register = async (registerData) => {
    
    const body = JSON.stringify(registerData);
    
    try {
        const res = await axios.post("http://localhost:5000/api/userAuth/register", body, config);
        
        return { type: CREATE_NEW_USER, payload: res.data.token };
    } catch (error) {
        console.log('Error creating new user -- register action');
    }
}

