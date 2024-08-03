import React from 'react';
import './lastProjects.scss';

export default function NotificationsBox() {
    return (
        <div className='last-projects'>
            <h3>התראות</h3>
            <div className='search-bar'>
                <input type='text' placeholder='Search...' />
            </div>
            <div className='project-list'>
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
    );
}
