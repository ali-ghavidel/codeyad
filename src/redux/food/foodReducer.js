import { BUY_SANDWICH } from "./foodType";

const states = {
    sandwich: 15
}

const foodReducer = (state = states, action) => {
    switch (action.type) {
        case BUY_SANDWICH:
            return {...state, sandwich: state.sandwich - action.payload}
    
        default:
            return state
    }
}

export default foodReducer;