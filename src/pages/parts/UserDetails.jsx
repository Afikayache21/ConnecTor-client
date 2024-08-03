import React from 'react';
import './userDetails.scss';

export default function UserDetails() {
    return (
        <div className='user-details'>
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
    );
}
