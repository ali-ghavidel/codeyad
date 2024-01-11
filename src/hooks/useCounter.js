import { useState } from "react";

const useCounter = (init,value) => {

    const [count, setCount] = useState(init);
    
    const increament = () => {
        setCount ( count + value);
    }
    const decreament = () => {
        setCount ( count - value);
    }
    const reset = () => {
        setCount ( init);
    }

    return [count,increament,decreament,reset];
}

export default useCounter;