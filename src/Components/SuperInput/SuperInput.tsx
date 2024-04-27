import React, {useRef} from 'react';

const SuperInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleClick = () => {
        inputRef?.current?.focus();
        
    };
    

    return (
        <>
        <h1>Super Input</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus</button>
        
        </>
    )

}
export default SuperInput;