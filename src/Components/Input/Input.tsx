import React, {useState} from 'react';

const Input = () => {
const [value, setValue] = useState('');

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
}
    return (
        <div>
            input: <input type="text" value={value} onChange={handleChange} />
            <p>
                value: {value}
            </p>
            
        </div>
    );
};
export default Input;