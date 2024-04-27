import React from 'react';

type Props = {
    children: string;
};
const Button = ({ children }: Props) => {
    const onClick = () => {
        alert('Button clicked');
    };
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;