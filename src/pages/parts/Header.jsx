import React from 'react';
import '../profilePage/profileDesktop.scss';




export default function Header() {
    return (
        <div className='header' dir='rtl'>
            <div className='profile-picture'>
                <img src='public/blue-safety-construction-background-image_6234133.jpg!sw800' alt='Profile' />
            </div>
            <div className='menu-icon'>
                👤
            </div>
            <div className='social-media-links'>
                <ul>
                    <li><a href='#'>🔗</a></li>
                    <li><a href='#'>✈️</a></li>
                    <li><a href='#'>👤</a></li>
                    <li><a href='#'>✏️</a></li>
                    <li><a href='#'>🔲</a></li>
                </ul>
            </div>
        </div>
    );
}
