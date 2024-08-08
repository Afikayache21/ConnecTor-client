import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import userStore from '../../Services/DataStore/UserStore.js';
import './profileDesktop.scss';

const Profile = observer(() => {
    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState({
        email: userStore.mail,
        fName: userStore.fName,
        lName: userStore.lName,
        pNumber: userStore.pNumber,
        lCode: userStore.lCode,
        professions: userStore.professions,
        wArea: userStore.wArea,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSave = () => {
        userStore.setMail(user.email);
        userStore.setfName(user.fName);
        userStore.setlName(user.lName);
        userStore.setpNumber(user.pNumber);
        userStore.setlCode(user.lCode);
        userStore.setProfession(user.professions);
        userStore.setwArea(user.wArea);
        setEdit(false);
    };

    const handleCancel = () => {
        setUser({
            email: userStore.mail,
            fName: userStore.fName,
            lName: userStore.lName,
            pNumber: userStore.pNumber,
            lCode: userStore.lCode,
            professions: userStore.professions,
            wArea: userStore.wArea,
        });
        setEdit(false);
    };

    if (!userStore.type) {
        return (
            <div>
                <p>Please login first</p>
            </div>
        );
    }

    return (
        <div className='user-profile'>
            <div className='userDetails'>
                <p>User Details</p>
                {edit ? (
                    <>
                        <p>
                            Email:
                            <input
                                type="text"
                                name="email"
                                placeholder={userStore.mail}
                                value={user.email}
                                onChange={handleInputChange}
                            />
                        </p>
                        <p>
                            First Name:
                            <input
                                type="text"
                                name="fName"
                                placeholder={userStore.fName}
                                value={user.fName}
                                onChange={handleInputChange}
                            />
                        </p>
                        <p>
                            Last Name:
                            <input
                                type="text"
                                name="lName"
                                placeholder={userStore.lName}
                                value={user.lName}
                                onChange={handleInputChange}
                            />
                        </p>
                        <p>
                            Phone Number:
                            <input
                                type="text"
                                name="pNumber"
                                placeholder={userStore.pNumber}
                                value={user.pNumber}
                                onChange={handleInputChange}
                            />
                        </p>
                        {userStore.type === 'Constructor' && (
                            <>
                                <p>
                                    Licence Code:
                                    <input
                                        type="text"
                                        name="lCode"
                                        placeholder={userStore.lCode}
                                        value={user.lCode}
                                        onChange={handleInputChange}
                                    />
                                </p>
                                <p>
                                    Profession:
                                    <input
                                        type="text"
                                        name="professions"
                                        placeholder={userStore.professions}
                                        value={user.professions}
                                        onChange={handleInputChange}
                                    />
                                </p>
                                <p>
                                    Working Area:
                                    <input
                                        type="text"
                                        name="wArea"
                                        placeholder={userStore.wArea}
                                        value={user.wArea}
                                        onChange={handleInputChange}
                                    />
                                </p>
                            </>
                        )}
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Back</button>
                    </>
                ) : (
                    <>
                        <p>Email: {userStore.mail}</p>
                        <p>First Name: {userStore.fName}</p>
                        <p>Last Name: {userStore.lName}</p>
                        <p>Phone Number: {userStore.pNumber}</p>
                        {userStore.type === 'Constructor' && (
                            <>
                                <p>Licence Code: {userStore.lCode}</p>
                                <p>Profession: {userStore.professions}</p>
                                <p>Working Area: {userStore.wArea}</p>
                            </>
                        )}
                        <button onClick={() => setEdit(true)}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
});

export default Profile;
