const createNewProject = (state, project) => {
    const newProject = [...state.project, project];
    console.log(newProject)
    return {...state, project: newProject}
}

export default createNewProject;
