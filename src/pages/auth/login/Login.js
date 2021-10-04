import React, { useState } from 'react';
import './login.css'
import { Host, Endpoints } from '../../../helpers/comman_helper';
import { Link, useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
export default function Login() {
    const [loading, setLoading] = useState({ signIn: false, signUp: false });
    const [signInData, setSignInData] = useState(null);
    const [signInDataError, setSignInDataError] = useState({});
    const handleSignInChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    }
    const isValidSigIn = () => {
        var emailValidator = new RegExp(
            /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
        ).test(signInData && signInData.email);

        if (signInData === null || signInData.email === '' || signInData.email === undefined || !emailValidator) {
            setSignInDataError({ email: 'Please enter a valid email!' })
            return false;
        } else if (signInData.password === '' || signInData.password === undefined) {
            setSignInDataError({ password: 'Please enter your password!' })
            return false;
        } else {
            return true;
        }
    }
    const handleSignIn = async (e) => {
        setLoading({ signIn: true });
        e.preventDefault();
        if (isValidSigIn()) {
            setSignInDataError('');
            const url = Host + Endpoints.login;
            try {
                const result = await axios.post(url, signInData);
                if (result.data.error === true) {
                    toast.error(result.data.title);
                } else {
                    // setIsLoggedIn(true);
                    toast.success(result.data.title);
                    const { error, title, ...updatedObject } = result.data; // Delete error, title from result.data
                    setSignInData(result.data.data);
                    localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_NAME, JSON.stringify(updatedObject)); // Convert Object to string
                    setTimeout(function () {
                        window.location.href = '/';
                    }, 2000);
                }
            } catch (e) {
                const { response } = e;
                // console.log(response.data);
                toast.error('Something went wrong!');
            }
        }
        setLoading({ signIn: false });
    }
    const fillcreds = (userType) => {
        setSignInData(null);
        if (userType === 'admin') {
            setSignInData({ ...signInData, email: 'rahulmore@gmail.com', password: '123456789' });
        } else if (userType === 'normal') {
            setSignInData({ ...signInData, email: 'yogeshmore@gmail.com', password: '123456789' });
        }
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
                    <div className="loginBox">
                        <input type="text" placeholder="email" name="email" className="loginInput" onChange={(e) => handleSignInChange(e)} />
                        <span className="validationMessage">{signInDataError.email}</span>

                        <input type="password" placeholder="password" name="password" className="loginInput" onChange={(e) => handleSignInChange(e)} />
                        <span className="validationMessage">{signInDataError.password}</span>

                        <button className="loginButton" type="submit" onClick={handleSignIn} disabled={loading.signIn}>{loading.signIn ? 'Please wait...' : 'Login'}</button>
                        <Link to="/register" className="loginRegisterButton">Create a new account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
