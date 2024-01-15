

const fruitStates = {
    apple: 5,
    orange: 10
}
const foodStates = {
    sandwitch: 15
}

const fruitReducer = (state = fruitStates, action) => {
    switch (action.type) {
        case "buy-apple":
            return {...state, apple: state.apple - 1}
        case "buy-orange":
            return {...state, orange: state.orange - 1}
        default:
            return state
    }
}

const foodReducer = (state = foodStates, action) => {
    switch (action.type) {
        case "buy-sandwitch":
            return {...state, sandwitch: state.sandwitch - 1}
        default:
            return state
    }
}

const rootReducer = Redux.combineReducers({
    fruit: fruitReducer,
    food: foodReducer
})

const store = Redux.createStore(rootReducer);

const render = () => {
    console.log(store.getState());
    document.getElementById("apples").innerHTML = store.getState().fruit.apple;
    document.getElementById("oranges").innerHTML = store.getState().fruit.orange;
    document.getElementById("sandwitches").innerHTML = store.getState().food.sandwitch;
}
store.subscribe(()=>{
    render();
})

document.getElementById("purchase-apple").addEventListener('click', ()=>{
    store.dispatch({type: "buy-apple"});
})

document.getElementById("purchase-orange").addEventListener('click', ()=>{
    store.dispatch({type: "buy-orange"});
})

document.getElementById("purchase-sandwitch").addEventListener('click', ()=>{
    store.dispatch({type: "buy-sandwitch"});
})

render();