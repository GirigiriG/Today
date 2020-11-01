const createNewProject = (state, project) => {
    const newProject = [...state.project, project];
    return {...state, project: newProject}
}

export default createNewProject;
