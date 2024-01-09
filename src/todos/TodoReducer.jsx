

export const init = {
    todo: {
        userId: 0,
        title: "",
        completed: false
    },
    users: [],
}

export const reducer = (state, action) => {
    switch (action.act) {
        case "getUsers":
            return {...state , users: action.value}
        case "getTodo":
            return {...state , todo: action.value}
        case "changeInput":
            return {...state, todo: {...state.todo, [action.what]: action.with} }
        default:
            break;
    }
}