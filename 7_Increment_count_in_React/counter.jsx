import "./counter.css"
import {useState} from 'react'

function Counter() {
    var [state,setState]= useState(0);


    const increaseCount = () => {
        state+=1;
        setState(state);
    };

    return (
        <div className="counter">
            <h2>Counter App in React</h2>
            <p>Count Value is : {state}</p>
            <button onClick={increaseCount}>incCount</button>
        </div>
    );
}

export default Counter