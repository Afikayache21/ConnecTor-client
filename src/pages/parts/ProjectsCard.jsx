import React from 'react'
import { observer } from 'mobx-react-lite';
import projectStore from '../../Services/DataStore/ProjectsStore';
import { useEffect } from'react';

// This component fetches projects for a given user when it mounts.
const ProjectsCard = observer(() => {
  useEffect(() => {
    const userId = 'someUserId'; // Replace with actual userId
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
                    <li key={project._id}>{project.ProjectName}</li>
                ))}
            </ul>
        )}
    </div>
);
})
export default ProjectsCard