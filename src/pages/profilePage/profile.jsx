import React from 'react';
import './profileDesktop.scss';
import { observer } from 'mobx-react-lite';
import userStore from '../../Services/DataStore/UserStore.js';

const Profile = observer(() => {
    if (!userStore.type) {
        return (
            <div >
                <p>י�� להתחבר כדי לצפות בפרו��י��</p>
            </div>
        )
    }
    else if (userStore.type == 'Customer') {
        return (
            <div style={{ direction: 'rtl' }} className='user-profile'>
                <div className='userDetails'>
                    <p>user deatils</p>
                </div>
                <div className='userProjects'>
                    user deatils
                </div>
            </div>
        );
    }
    else if (userStore.type == 'Constructor') {
        return (
            <div style={{ direction: 'rtl' }} className='user-profile'>
                <div className='userDetails'>
                    user deatils
                </div>
                <div className='userProjects'>
                    user deatils
                </div>
            </div>
        );

    }});

export default Profile;