import React from 'react'
import './mobileLogin.scss'
import './desktopLogin.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const url = 'http://localhost:5000/api/auth/login'

const navigate = useNavigate();

export default function login() {



    const handleLogIn = async () => {
        try {
            const response = await axios.post(url, {
                email: email,
                userPassword: password
            });
            localStorage.setItem('token', response.data.token);
            console.log('Login Successful:', response.data,'token', response.data.token);
            navigate('/') // Redirect to home page after successful login
        } catch (error) {
            alert('Invalid credentials. Please try again.')
            console.error('Error fetching data:', error);
        }


        // Call your login API here
        console.log('Logging in...');
        // Redirect to home page after successful login
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <div className='login-card'>
                <div className='right-side'>
                    <div className='inputs-form'>
                        <input type="text" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <button onClick={handleLogIn}>Login</button>
                        <Link to='/register'>
                            <span>Don't have an account?</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
