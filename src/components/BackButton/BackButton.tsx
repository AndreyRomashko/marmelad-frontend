import React from 'react';
import "./BackButton.scss";
import {ReactSVG} from "react-svg";
import arrowLeft from "./img/arrow-left.svg";

const BackButton: React.FC = () => {
    return (
        <div className="back-button">
            <ReactSVG src={arrowLeft} className="back-button__icon"/>
        </div>
    );
};

export default BackButton;