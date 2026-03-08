import "./counter.css"
import {useState} from 'react'

function Counter() {
    var [state,setState]= useState(0);


    const increaseCount = () => {
        // state+=1;
        // setState(state);

        setState(state+1);
        setState(state+2);
        setState(34);
        setState(state+3);
        setState(state+4);
        setState(39);
        setState(state+5);
        setState(state+6);    // return 6


        setState((state) => {
            return state+1    // 1
        });

        setState((state) => {
            return state+1     // 2
        });

        setState((state) => {
            return state+1     // 3
        });
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