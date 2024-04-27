import React from 'react';

type Props = {
    text: string;
};
const Banner = ({ text }: Props) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};
export default Banner;