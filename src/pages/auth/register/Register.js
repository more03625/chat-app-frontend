import React, { useState } from 'react';
import './register.css'
import { Host, Endpoints } from '../../../helpers/comman_helper';
import { Link, useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
export default function Register() {
    const [signUpData, setSignUpData] = useState(null);
    const [signUpDataError, setSignUpDataError] = useState({});
    const [loading, setLoading] = useState({ signIn: false, signUp: false });
    const [signInData, setSignInData] = useState(null);
    const [signInDataError, setSignInDataError] = useState({});

    const history = useHistory();

    const handleSignupChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    }
    const isValidSignup = () => {
        var emailValidator = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(signUpData && signUpData.email);

        if (signUpData === null || signUpData === undefined) {
            setSignUpDataError({ email: 'Please enter your email!' })
            return false;
        } else if (signUpData.name === '' || signUpData.name === undefined) {
            setSignUpDataError({ name: 'Please enter your name!' })
            return false;
        }
        else if (signUpData.email === '' || signUpData.email === undefined || !emailValidator) {
            setSignUpDataError({ email: 'Please enter a valid email!' })
            return false;
        }
        else if (signUpData.username === '' || signUpData.username === undefined) {
            setSignUpDataError({ username: 'Please enter a valid username!' })
            return false;
        }
        else if (signUpData.phone === '' || signUpData.phone === undefined || signUpData.phone.length !== 10) {
            setSignUpDataError({ phone: 'Please enter a valid 10 digit phone number!' })
            return false;
        }
        else if (signUpData.password === '' || signUpData.password === undefined || signUpData.password.length <= 8) {
            setSignUpDataError({ password: 'Password must be greater than 8 characters!' })
            return false;
        }
        else if (signUpData.confirm_password === '' || signUpData.confirm_password === undefined) {
            setSignUpDataError({ confirm_password: 'Please confirm your password!' })
            return false;
        }
        else if (signUpData.password !== signUpData.confirm_password) {
            setSignUpDataError({ confirm_password: 'Passwords are not matching!' })
            return false;
        }
        else {
            return true;
        }
    }
    const handleSignUp = async (e) => {
        setLoading({ signUp: true });
        e.preventDefault();
        if (isValidSignup()) {
            setSignUpDataError('');
            const url = Host + Endpoints.signup;
            try {
                const result = await axios.post(url, signUpData);
                if (result.data.error === true) {
                    toast.error(result.data.title)
                } else {
                    toast.success(result.data.title);
                    setTimeout(function () {
                        history.push("/login")
                    }, 3000)
                }
            } catch (e) {
                const { response } = e;
                // console.log(response.data);
                toast.error('Something went wrong!');
            }
        }
        setLoading({ signUp: false });
    }

    return (
        <div className="login">
            <Toaster />
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Chat Now</h3>
                    <span className="loginDesc">Connect with freinds and the world around you on Chat Now.</span>
                </div>
                <div className="loginRight">
                    <div className="signUpBox">
                        <input type="text" placeholder="Enter your name" name="name" className="signUpInput" onChange={(e) => handleSignupChange(e)} />
                        <span className="validationMessage">{signUpDataError.name}</span>

                        <input type="text" placeholder="Enter your email" name="email" className="signUpInput" onChange={(e) => handleSignupChange(e)} />
                        <span className="validationMessage">{signUpDataError.email}</span>

                        <input type="text" placeholder="Enter your username" name="username" className="signUpInput" onChange={(e) => handleSignupChange(e)} />
                        <span className="validationMessage">{signUpDataError.username}</span>

                        <input type="number" placeholder="Enter your mobile number" name="phone" className="signUpInput" onChange={(e) => handleSignupChange(e)} />
                        <span className="validationMessage">{signUpDataError.phone}</span>

                        <input type="password" placeholder="Enter your password" name="password" className="signUpInput" onChange={(e) => handleSignupChange(e)} />
                        <span className="validationMessage">{signUpDataError.password}</span>

                        <input type="password" placeholder="Confirm your password" name="confirm_password" className="signUpInput" onChange={(e) => handleSignupChange(e)} />
                        <span className="validationMessage">{signUpDataError.confirm_password}</span>

                        <button className="loginButton" type="submit" onClick={handleSignUp} disabled={loading.signUp}>{loading.signUp ? 'Please wait...' : 'Register'}</button>
                        <Link to="/login" className="LoginInBtn">Log in to your account!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
