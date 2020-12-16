import React from 'react';
import "./Heading.scss";
import classNames from "classnames"

interface IHeaderProps {
    text: string
    type?: "mod-1" | "mod-2",
}

const Heading: ({text, type}: IHeaderProps) => JSX.Element = ({text, type}: IHeaderProps) => {
    return (
        <h2 className={classNames(["heading", type && `heading--${type}`])}>{text}</h2>
    );
};

export default Heading;
