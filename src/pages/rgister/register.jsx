import React, { useState } from 'react';
import './registerDesktop.scss';
import './registerMobile.scss';
import { Link } from 'react-router-dom';

export default function Register() {
    const [activeTab, setActiveTab] = useState('customer');

    return (
        <div className='register'>
            {/* Tab bar */}
            <div className='tab-bar'>
                <button
                    className={`tab ${activeTab === 'customer' ? 'active' : ''}`}
                    onClick={() => setActiveTab('customer')}
                >
                    I'm a customer
                </button>
                <button
                    className={`tab ${activeTab === 'constructor' ? 'active' : ''}`}
                    onClick={() => setActiveTab('constructor')}
                >
                    I'm a constructor
                </button>
            </div>

            <div className='register-card'>
                <h1 >Register</h1>

                <div className='right-side'>
                    <div className='inputs-form'>
                        {/* Conditional rendering based on active tab */}
                        <>
                            <input type="text" placeholder='First name' />
                            <input type="text" placeholder='Last name' />
                            <input type="text" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <input type="text" placeholder='Phone number' />
                            <input type="text" placeholder='License Code' />
                            {activeTab === 'constructor' && (
                                <>
                                    <input type="checkbox" placeholder='Working area' />
                                    <input type="checkbox" placeholder='User professions' />
                                </>
                            )}
                            <input style={{ paddingBottom: '50px' }} type="file" placeholder='Profile picture' />
                        </>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link to='/login'>
                                <span>Already have an account?</span>
                            </Link>
                            <button className='register-button'>Register</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
