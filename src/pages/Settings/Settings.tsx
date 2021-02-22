import React from 'react';
import Navbar from "./Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import "./Settings.scss";
import {ReactSVG} from "react-svg";
import instagramIcon from "./imgs/instagram-icon.svg";

const Settings: React.FC = () => {
    return (
        <div className="settings">
            <Heading text="Settings"/>
            <div className="settings__content-container">
                <div className="settings__user-info">
                <span className="settings__user-email">
                    Krishna@gmail.com
                </span>
                    <span className="settings__user-role">
                    Admin
                </span>
                </div>
                <Navbar/>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"  className="settings__link">
                    <ReactSVG src={instagramIcon} className="settings__link-icon"/>
                </a>
            </div>
        </div>
    );
};

export default Settings;