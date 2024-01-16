import { BUY_APPLE, BUY_ORANGE } from "./fruitType"

export const buyApple = (count) => {
    return ( {
        type: BUY_APPLE,
        payload: count
    } )
}

export const buyOrange = (count) => {
    return ( {
        type: BUY_ORANGE,
        payload: count
    } )
}