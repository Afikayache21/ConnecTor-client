import React, { useState } from 'react';
import Select from 'react-select';
import './registerDesktop.scss';
import './registerMobile.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

const url = 'http://localhost:5000/api/auth/register';

export default function Register() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('customer');
    const [selectedWorkingArea, setSelectedWorkingArea] = useState(null);
    const [selectedProfessions, setSelectedProfessions] = useState([]);
    const [user, setUser] = useState({
        FirstName: '',
        LastName: '',
        Mail: '',
        Password: '',
        PhoneNumber: '',
        ProfilePicture: null,
        UserType: {
            TypeName: activeTab === 'customer' ? 'Customer' : 'Constructor',
            licenceCode: '',
            workingArea: '',
            proffesions: [],
        },
        Followers: [],
        Following: [],
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        // Update UserType with selected options
        const updatedUser = {
            ...user,
            UserType: {
                ...user.UserType,
                workingArea: selectedWorkingArea ? selectedWorkingArea.value : '',
                proffesions: selectedProfessions.map(profession => profession.value),
            },
        };

        try {
            const response = await axios.post(url, updatedUser, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Register Successful:', response.data);
            navigate('/login'); // Redirect to login page after successful registration
        } catch (error) {
            alert('Registration failed. Please try again.');
            console.error('Error during registration:', error.response.data);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Check if the input is part of the UserType object
        if (name.startsWith("UserType.")) {
            const key = name.split(".")[1]; // Get the key inside UserType
            setUser({
                ...user,
                UserType: {
                    ...user.UserType,
                    [key]: value,
                },
            });
        } else {
            setUser({
                ...user,
                [name]: value,
            });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setUser({
                ...user,
                ProfilePicture: reader.result,
            });
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className='register'>
            <div className='tab-bar'>
                <button
                    className={`tab ${activeTab === 'customer' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveTab('customer');
                        setUser({
                            ...user,
                            UserType: {
                                ...user.UserType,
                                TypeName: "Customer"
                            }
                        });
                    }}
                >
                    I'm a customer
                </button>
                <button
                    className={`tab ${activeTab === 'constructor' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveTab('constructor');
                        setUser({
                            ...user,
                            UserType: {
                                ...user.UserType,
                                TypeName: "Constructor"
                            }
                        });
                    }}
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
                            name="FirstName"
                            value={user.FirstName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Last name'
                            name="LastName"
                            value={user.LastName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            name="Mail"
                            value={user.Mail}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            name="Password"
                            value={user.Password}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Phone number'
                            name="PhoneNumber"
                            value={user.PhoneNumber}
                            onChange={handleInputChange}
                        />
                        {activeTab === 'constructor' && (
                            <>
                                <input
                                    type="text"
                                    placeholder='License Code'
                                    name="UserType.licenceCode"
                                    value={user.UserType.licenceCode}
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
