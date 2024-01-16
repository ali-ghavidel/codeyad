import { BUY_APPLE, BUY_ORANGE } from "./fruitType";

const states = {
    apple: 5,
    orange: 10
}

const fruitReducer = (state = states, action) => {
    switch (action.type) {
        case BUY_APPLE:
            return {...state, apple: state.apple - action.payload}
        case BUY_ORANGE:
            return {...state, orange: state.orange - action.payload}
        default:
            return state
    }
}

export default fruitReducer;