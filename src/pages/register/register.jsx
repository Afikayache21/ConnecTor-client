import React, { useState } from 'react';
import Select from 'react-select';
import './registerDesktop.scss';
import './registerMobile.scss';
import { Link } from 'react-router-dom';

const workingAreaOptions = [
    { value: 'area1', label: 'Area 1' },
    { value: 'area2', label: 'Area 2' },
    { value: 'area3', label: 'Area 3' },
];

const userProfessionsOptions = [
    { value: 'profession1', label: 'Profession 1' },
    { value: 'profession2', label: 'Profession 2' },
    { value: 'profession3', label: 'Profession 3' },
];

export default function Register() {
    const [activeTab, setActiveTab] = useState('customer');
    const [selectedWorkingArea, setSelectedWorkingArea] = useState(null);
    const [selectedProfessions, setSelectedProfessions] = useState([]);

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
                <h1>Register</h1>

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
                                    <Select
                                        options={workingAreaOptions}
                                        placeholder="Working area"
                                        value={selectedWorkingArea}
                                        onChange={setSelectedWorkingArea}
                                        isClearable
                                    />
                                    <Select
                                        options={userProfessionsOptions}
                                        placeholder="User professions"
                                        value={selectedProfessions}
                                        onChange={setSelectedProfessions}
                                        isMulti
                                    />
                                </>
                            )}
                            <input style={{ paddingBottom: '38px' }} type="file" placeholder='Profile picture' />
                        </>
                        <div className='registerButtonContainer'>
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
