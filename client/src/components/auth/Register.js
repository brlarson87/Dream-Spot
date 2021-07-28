import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

//ACTIONS
import { register, loadUser } from '../../actions/auth';

import passwordValidator from '../../utils/passwordValidator';

import backArrow from "../../img/arrow_back.svg";

const Register = ({ history }) => {
    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password1: "",
        password2: "",
        phone: ""
    });
    const [error, setError] = useState('Passwords must be at least 8 characters including an uppercase, number and special character');
    const [errorColor, setErrorColor] = useState('normal')

    const dispatch = useDispatch();

    const {
        firstName,
        lastName,
        email,
        password1,
        password2,
        phone
    } = registerData;

    const onChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        let data = { firstName, lastName, email, phone };
        if(!firstName || !lastName || !email || !phone || !password1 || !password2) {
            let inputFields = document.querySelectorAll('#register-form div input');
            inputFields.forEach(input => {
                if(!input.value) {
                    input.style.borderBottomColor = 'red';
                } else {
                    input.style.borderBottomColor = '#81b8c6';
                }
                
            })
            setError('All fields required!');
            setErrorColor('danger');
            return;
        }

        if(password1 !== password2) {
            setError('**Passwords must match**');
            setErrorColor('danger');
            return; 
        }

        if(!passwordValidator(password1)) {
            setError('Passwords must be at least 8 characters including an uppercase, number and special character');
            setErrorColor('danger');
            return; 
        }

        data.password = password1;

        let registerAction = await register(data);
        dispatch(registerAction);

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
            <h2 className="m-b-med">Register</h2>
            {error && <p className={`form-error ${errorColor}`}>{error}</p>}
            <form onSubmit={e => onSubmit(e)} className="form" id="register-form">
                <div>
                    <h6>First Name</h6>
                    <input
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={(e) => onChange(e)}
                        autoComplete='off'
                    />
                </div>

                <div>
                    <h6>Last Name</h6>
                    <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={(e) => onChange(e)}
                        autoComplete='off'
                    />
                </div>

                <div>
                    <h6>Email</h6>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                        autoComplete='off'
                    />
                </div>

                <div>
                    <h6>Phone</h6>
                    <input
                        type='text'
                        name='phone'
                        value={phone}
                        onChange={(e) => onChange(e)}
                        autoComplete='off'
                    />
                </div>

                <div>
                    <h6>Password</h6>
                    <input
                        type='password'
                        name='password1'
                        value={password1}
                        onChange={(e) => onChange(e)}
                        autoComplete='off'
                    />
                </div>

                <div>
                    <h6>Password (re-enter)</h6>
                    <input
                        type='password'
                        name='password2'
                        value={password2}
                        onChange={(e) => onChange(e)}
                        autoComplete='off'
                    />
                </div>

                <input type="submit" value="Register" />

                <p className="register-login-router">Already have an account...? Login <Link to='login' className="router-link-form">Here</Link></p>
            </form>
        </div>
        </Fragment>
        
    )
}

export default Register;