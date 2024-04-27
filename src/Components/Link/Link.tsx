import React from 'react';
type Props = {
    children: string;
    href: string;
};
const Link = ({children, href}: Props) => {
    return (
        <div>
            <a href= {href} style={{display: 'inline-block', padding: '10px 20px', backgroundColor: 'blue', color: 'white', textDecoration: 'none', borderRadius: '5px'}}></a>
            {children}
        </div>
    );
};
export default Link;