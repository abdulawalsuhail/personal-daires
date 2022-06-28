import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from "react-router-dom";
import './SignOut.css'

const SIgnOut = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        // return <Loading></Loading>
    }

    

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <div className='login-form py-3'>
            <h2 style={{ textAlign: 'center' }}>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Email Address' required />

                <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Password' required />

                <input className='w-50 mx-auto btn btn-success mt-2'
                    type="submit"
                    value="Login" />
            </form>
            <p>Create a new user? <Link to="/signUp" className='text-info pe-auto text-decoration-none' >Please Sign Up</Link> </p>
            <SocialLogin />
        </div>
        </div>
    );
};

export default SIgnOut;