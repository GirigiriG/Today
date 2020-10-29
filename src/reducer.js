const reducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return {"New Project": "Project created"}
        default:
            return {"error": "type not found"}
    }
}

export default reducer