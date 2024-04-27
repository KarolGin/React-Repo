import exp from 'constants';
import React, {useState, useEffect} from 'react';

const EffectButton = () => {
    const [count, setCount] = useState(0);
    useEffect (() =>{
    console.log("Count zostal zmieniony na: ", count);
    } ,[count])
    const handleClick = () => {
        setCount(count + 1);
    }

return(
    <>
    <h1>Effect Button</h1>
    <p>Kliknij przycisk aby zwiekszyc liczbe</p>
    <button onClick={handleClick}>Kliknij</button>
    <p>Liczba: {count}</p>
    </>
)    
}
export default EffectButton;