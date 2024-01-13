

const states = {
    apple: 5
}

const reducer = (state = states, action) => {
    switch (action.type) {
        case "buy-apple":
            return {apple: state.apple - 1}
        default:
            return state
    }
}

const store = Redux.createStore(reducer);

store.subscribe(()=>{
    document.getElementById("apples").innerHTML = store.getState().apple;
})

document.getElementById("purchase").addEventListener('click', ()=>{
    store.dispatch({type: "buy-apple"});
})
document.getElementById("apples").innerHTML = store.getState().apple;