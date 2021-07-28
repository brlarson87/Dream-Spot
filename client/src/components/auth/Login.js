import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom";
import { login, loadUser } from '../../actions/auth';

import backArrow from "../../img/arrow_back.svg";

const Login = ( {history} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const onSubmit = async e => {
        e.preventDefault();
        setError('');
        const loginData = { email, password };
        const loginAction = await login(loginData);
        
        if(loginAction.payload.error) {
            setError('Invalid email or password');
            return dispatch(loginAction);
        }
        
        dispatch(loginAction);
        const loadUserAction = await loadUser();
        dispatch(loadUserAction);
        history.push("/");
        
    }

    return (
        <Fragment>
            <Link to="/" className="main-btn link-transform">
                <img src={backArrow} alt="" />
                &nbsp;Home
            </Link>
            
            <div className="flex-centered">
            
            <h2 className="m-b-med">Login</h2>
            {error && <p className="danger">{error}</p>}
            <form onSubmit={e => onSubmit(e)} className="form">
                <div>
                    <h6>Email</h6>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='off'
                    />
                </div>

                <div>
                    <h6>Password</h6>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='off'
                    />
                </div>

                <input type="submit" value="Login" />

                <p className="register-login-router">Don't have an account...? Register <Link to='/register' className="router-link-form">Here</Link></p>
            </form>
        </div>
        </Fragment>
        
    )
}

export default Login;