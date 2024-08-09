import React from 'react'
import { observer } from 'mobx-react-lite';
import projectStore from '../../Services/DataStore/ProjectsStore';
import { useEffect } from'react';
import userStore from '../../Services/DataStore/UserStore';


const ProjectsCard = observer(() => {

    useEffect(() => {
    const userId = userStore.id;
    projectStore.fetchProjects(userId);
    }, []);

if (projectStore.isLoading) return <div>Loading...</div>;
if (projectStore.error) return <div>{projectStore.error}</div>;

return (
    <div className='userProjects'>
        {projectStore.projects.length === 0 ? (
            <div>No projects found.</div>
        ) : (
            <ul>
                {projectStore.projects.map(project => (
                    <li key={project._id}>
                        <h3>{project.ProjectName}</h3>
                        <p><strong>Entrepreneur ID:</strong> {project.EntrepreneurID}</p>
                        <p><strong>Project Description:</strong> {project.ProjectDescription}</p>
                        <p><strong>Project Address:</strong> {project.ProjectAdress}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
);
})
export default ProjectsCard