import React from 'react'
import './mobileLogin.scss'
import './desktopLogin.scss'
import { Link } from 'react-router-dom'
export default function login() {
    return (
        <div className='login'>
            <h1>Login</h1>
            <div className='login-card'>
                <div className='right-side'>
                    <div className='inputs-form'>
                        <input type="text" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                        <Link to='/register'>
                            <span>Don't have an account?</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
