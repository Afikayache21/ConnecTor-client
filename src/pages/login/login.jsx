import React, { useRef, useState } from 'react'
import './mobileLogin.scss'
import './desktopLogin.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom'
import userStore from '../../Services/DataStore/UserStore';




const url = 'http://localhost:5000/api/auth/login'


 const Login = observer(() => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' });

    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            console.log(user);

            const response = await axios.post(url, {
                Mail: user.email,
                Password: user.password
            });
            localStorage.setItem('token', response.data.token);
            console.log('Login Successful:', response.data, 'token', response.data.token);
            userStore.setMail(user.email);
            navigate('/') // Redirect to home page after successful login
        } catch (error) {
            alert('Invalid credentials. Please try again.')
            console.error('Error fetching data:', error);
        }


        // Call your login API here
        console.log('Logging in...');
        // Redirect to home page after successful login
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={handleLogIn} className='login-card'>
                <div className='right-side'>
                    <div className='inputs-form'>
                        <input onChange={handleChange} name='email' type="text" placeholder='Email' />
                        <input onChange={handleChange} name='password' type="password" placeholder='Password' />
                        <button type='submit'>Login</button>
                        <Link to='/register'>
                            <span>Don't have an account?</span>
                        </Link>
                    </div>
                </div>
            </form>

        </div>
    )
})
export default Login