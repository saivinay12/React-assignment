import {react,Component, useState} from 'react'

 function Counter()
{
    const [counter,setCounter]=useState(0)
    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        setCounter(counter - 1);
    };


    return(
        <div>Counter {counter}
        <div>
        <button  onClick={incrementCounter}>Increment Counter</button>
        <button  onClick={decrementCounter}>Decrement Counter</button>
        </div>
        </div>
    )
}
export default Counter;
