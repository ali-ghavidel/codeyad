import { combineReducers } from "redux";
import fruitReducer from "./fruit/fruitReducer";
import foodReducer from "./food/foodReducer";

export const rootReducer = combineReducers({
    fruit: fruitReducer,
    food: foodReducer
})