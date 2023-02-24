import React, {useState} from 'react';
import useCounter from '../../hooks/useCounter';


const Counter = () => {
    const {count, increment, decrement, clear} = useCounter({step:1})
    // const [newNumber, setnewNumber] = useState('');

    return (
        <div>
            <h1>Contador</h1>
            <h1>{count}</h1>
            <div>
                <button onClick={increment}>Incrementar</button>
                <button onClick={decrement}>Reducir</button>
                <button onClick={clear}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
