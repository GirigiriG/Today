import {taskService} from '../Service/TaskService'
const reducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_TASK': 
            return taskService(state);
        default:
            throw new Error("action type not implemented")
    }
}

export default reducer