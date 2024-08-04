import React, { useState } from 'react';
import Select from 'react-select';
import './registerDesktop.scss';
import './registerMobile.scss';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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


const url = 'http://localhost:5000/api/auth/register'

export default function Register() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('customer');
    const [selectedWorkingArea, setSelectedWorkingArea] = useState(null);
    const [selectedProfessions, setSelectedProfessions] = useState([]);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        licenseCode: '',
        profilePicture: null,
        
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log(user);

            const response = await axios.post(url, user);

            console.log('Register Successful:', response.data);
            navigate('/login') // Redirect to home page after successful login
        } catch (error) {
            alert('Invalid credentials. Please try again.')
            console.error('Error fetching data:', error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setUser({
            ...user,
            profilePicture: e.target.files[0],
        });
    };

    return (
        <div className='register'>
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
                        <input
                            type="text"
                            placeholder='First name'
                            name="firstName"
                            value={user.firstName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Last name'
                            name="lastName"
                            value={user.lastName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Email'
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            name="password"
                            value={user.password}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Phone number'
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={handleInputChange}
                        />
                        {activeTab === 'constructor' && (
                            <>
                                <input
                                    type="text"
                                    placeholder='License Code'
                                    name="licenseCode"
                                    value={user.licenseCode}
                                    onChange={handleInputChange}
                                />
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
                        <input
                            type="file"
                            placeholder='Profile picture'
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='registerButtonContainer'>
                        <Link to='/login'>
                            <span>Already have an account?</span>
                        </Link>
                        <button onClick={handleRegister} className='register-button'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
