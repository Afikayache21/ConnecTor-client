import React from 'react';
import { Link } from 'react-router-dom';
import './profileDesktop.scss';
import './profileMobile.scss';


export default function Profile() {
    return (
        <div style={{ direction: 'rtl' }} className='user-profile'>
            <header className='header'>
                <div className='profile-picture'>
                    {/* Profile Picture */}
                    <img src='public\blue-safety-construction-background-image_6234133.jpg!sw800' alt='Profile' />
                </div>
                <div className='menu-icon'>
                    {/* Menu icon (could be a button or a link) */}
                    {/* <button>☰</button> */}
                    <div>👤
                    </div>
                </div>
                <div className='social-media-links'>
                    {/* Social Media Links */}
                    <ul>
                        <li><a href='#'>🔗</a></li>
                        <li><a href='#'>✈️</a></li>
                        <li><a href='#'>👤</a></li>
                        <li><a href='#'>✏️</a></li>
                        <li><a href='#'>🔲</a></li>
                    </ul>
                </div>
            </header>
            <div className='top-shelf' style={{ display: 'flex' , flexDirection: 'row',justifyContent:'space-between'}}>

                <div style={{ flex: 1,justifyContent:'end' }} className='user-details'>
                    {/* User Details */}
                    <h2>User Details</h2>
                    <ul>
                        <li>Open</li>
                        <li>Open Recent</li>
                        <li>Option One</li>
                        <li>Option Two</li>
                        <li>Toggled Item</li>
                        <li>Disabled Item</li>
                        <li>Exit</li>
                    </ul>
                </div>
                <div className='last-projects'>
                    <h3 style={{ marginBottom: '20px' }}>התראות</h3>
                    <div className='search-bar'>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div className='project-list'>
                        {/* Replace with actual project data */}
                        <div className='project'>
                            <span>👤 Project name</span>
                            <span>bid: ₪10000</span>
                        </div>
                        <div className='project'>
                            <span>👤 Project name</span>
                            <span>bid: ₪20000</span>
                        </div>
                    </div>
                </div>

            </div>

            <main className='main-content'>
                <div className='price-offers'>
                    <h3 style={{ marginBottom: '20px' }}>הצעות מחיר</h3>
                    <div className='search-bar'>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div className='project-list'>
                        {/* Replace with actual project data */}
                        <div className='project'>
                            <span>👤 Project name</span>
                            <span>bid: ₪0000</span>
                        </div>
                        <div className='project'>
                            <span>👤 Project name</span>
                            <span>bid: ₪0000</span>
                        </div>
                    </div>
                </div>
                <div className='new-project'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>

                        <h3 >פרויקטים</h3>
                        <button style={{ backgroundColor: 'transparent', borderRadius: '200px', size: '50%' }}>+</button>
                    </div>
                    <div className='search-bar'>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div className='project-list'>
                        {/* Replace with actual project data */}
                        <div className='project'>
                            <span>Project name</span>
                        </div>
                        <div className='project'>
                            <span>Project name</span>
                        </div>
                    </div>
                </div>
                <div className='chats'>
                    <h3 style={{ marginBottom: '20px' }}>חיפוש</h3>
                    <div className='search-bar'>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div className='user-list'>
                        {/* Replace with actual user data */}
                        <div className='user'>
                            <span>👤 User name</span>
                        </div>
                        <div className='user'>
                            <span>👤 User name</span>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='footer'>
                {/* Footer content */}
                <div className='footer-item'>Construction</div>
                <div className='footer-item'>Item Two</div>
                <div className='footer-item'>Item Three</div>
            </footer>
        </div>
    );
}
