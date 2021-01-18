import React, { useState } from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return <div>
        <p>Count is: {count}</p>
        <button onClick={incrementCount}>Add</button>
        <button onClick={decrementCount}>decrease</button>
        <button onClick={resetCount}>resent</button>
    </div>
};

export default Counter;