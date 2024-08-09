import { observer } from 'mobx-react-lite';
import React, { useState, useEffect, useCallback } from 'react';
import userStore from '../../Services/DataStore/UserStore.js';
import UserDeatails from '../parts/UserDetails.jsx';
import './profileDesktop.scss';
import { useNavigate } from 'react-router-dom';
import ProjectsCard from '../parts/ProjectsCard.jsx';
import projectStore from '../../Services/DataStore/ProjectsStore.js';


const Profile = observer(() => {
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);
    // const cachedFn = useCallback(projectStore.fetchProjects, userStore.id)
    const [user, setUser] = useState({
        id: userStore.id,
        email: userStore.mail,
        fName: userStore.fName,
        lName: userStore.lName,
        pNumber: userStore.pNumber,
        lCode: userStore.lCode,
        professions: userStore.professions,
        wArea: userStore.wArea,
        profilePicture: userStore.ProfilePicture
    });


    useEffect(() => {
        if (!userStore.mail) {
            navigate('/login'); // Correct: navigation happens after render
        }
    }, [userStore.mail]);

    console.log(user);

    return (
        <div className='user-profile'>
            <UserDeatails user={user} setUser={setUser} edit={edit} setEdit={setEdit} />
            <ProjectsCard projects={projectStore.projects} />
        </div>
    );
});

export default Profile;
