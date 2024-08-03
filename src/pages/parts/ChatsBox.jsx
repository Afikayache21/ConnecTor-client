import React from 'react';
import './chats.scss';

export default function ChatsBox() {
    return (
        <div className='chats'>
            <h3>שיחות</h3>
            <div className='search-bar'>
                <input type='text' placeholder='Search...' />
            </div>
            <div className='user-list'>
                <div className='user'>
                    <span>👤 User name</span>
                </div>
                <div className='user'>
                    <span>👤 User name</span>
                </div>
            </div>
        </div>
    );
}
