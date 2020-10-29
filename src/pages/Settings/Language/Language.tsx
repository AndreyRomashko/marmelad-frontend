import React from "react";
import "./Language.scss";
import Heading from "../../../components/Heading/Heading";

const Language: React.FC = () => {
    return (
        <>
            <Heading text="Language"/>
            <ul className="language-list">
                <li className="language-list__item">
                    <label className="radio-button">English
                        <input type="checkbox" className="radio-button__input"/>
                        <span className="radio-button__checkmark"></span>
                    </label>
                </li>
                <li className="language-list__item">
                    <label className="radio-button">Ukrainian
                        <input type="checkbox" className="radio-button__input"/>
                        <span className="radio-button__checkmark"></span>
                    </label>
                </li>
                <li className="language-list__item">
                    <label className="radio-button">German
                        <input type="checkbox" className="radio-button__input"/>
                        <span className="radio-button__checkmark"></span>
                    </label>
                </li>
            </ul>
        </>
    );
};

export default Language;