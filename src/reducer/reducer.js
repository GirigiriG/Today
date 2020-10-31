export const initialState = {project: []}
const reducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return createProject(state, action.payload)
        default:
            throw new Error('action type must be defined')
    }
}

const createProject = (state, project) => {
    const newProject = [...state.project, project];
    return {
        ...state,
        project: newProject
    }
} 

export default reducer