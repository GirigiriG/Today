
import createNewProject from '../Service/ProjectService'

export const initialState = {project: []}
const reducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return createNewProject(state, action.payload)
        default:
            throw new Error('action type must be defined')
    }
}

export default reducer