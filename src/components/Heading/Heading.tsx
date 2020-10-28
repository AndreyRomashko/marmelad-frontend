import React from 'react';
import "./Heading.scss";

interface IHeaderProps {
    text: string
};

const Heading: ({text}: IHeaderProps) => JSX.Element = ({text}: IHeaderProps) => {
    return (
        <h2 className="heading">{text}</h2>
    );
};

export default Heading;