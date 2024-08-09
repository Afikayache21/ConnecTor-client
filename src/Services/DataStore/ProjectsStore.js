import axios from 'axios';
import { makeAutoObservable } from 'mobx';
const projectsControllerUrl = 'http://localhost:5000/api/projects'


class ProjectsStore {
    projects = [];
    isLoading = false;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }


    fetchProjects = async (userId) => {
        this.isLoading = true;
        this.error = null;
        try {
            const response = await axios.get(`${projectsControllerUrl}/user/${userId}`);
            console.log(response);
            
            this.projects = response.data;
        } catch (error) {
            this.error = 'Failed to fetch projects. Please try again later.';
            console.error(error);
        } finally {
            this.isLoading = false;
        }
    }

    createProject = async (project) => {
        try {
            const response = await axios.post(projectsControllerUrl, project);
            this.projects.push(response.data);
        } catch (error) {
            console.error('Failed to create project:', error);
        }
    }

    deleteProject = async (id) => {
        try {
            await axios.delete(`${projectsControllerUrl}/${id}`);
            this.projects = this.projects.filter(project => project._id !== id);
        } catch (error) {
            console.error('Failed to delete project:', error);
        }
    }

    updateProject = async (project) => {
        try {
            const response = await axios.put(`${projectsControllerUrl}/${project._id}`, project);
            const index = this.projects.findIndex(p => p._id === project._id);
            this.projects[index] = response.data;
        } catch (error) {
            console.error('Failed to update project:', error);
        }
    }
}

const projectStore = new ProjectsStore();
export default projectStore;
