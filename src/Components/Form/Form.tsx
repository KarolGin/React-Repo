import exp from 'constants';
import React, {useState} from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const handleClick = () => {
        alert(inputValue);
    }

  
    return (
    <div>
      <h1>Form</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Click Me</button>
        <p>
            Podgląd wartości: {inputValue}
        </p>
    </div>
  );
};
export default Form;