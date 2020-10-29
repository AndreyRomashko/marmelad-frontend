import React from "react";
import "./Switcher.scss";

const Switcher: React.FC = () => {
    return (
        <label className="switch">
            <input type="checkbox" className="switch__input"/>
            <span className="switch__slider"></span>
        </label>
    );
};

export default Switcher;