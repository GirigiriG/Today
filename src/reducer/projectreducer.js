const reducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return {"New Project": "Project created"}
        default:
            throw new Error('action not defined')
    }
}

export default reducer