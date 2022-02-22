import React from "react";
import Switcher from "./Switcher/Switcher";
import "./Navbar.scss";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        // <ul className="settings-navbar-list">
        //     <li className="settings-navbar-list__item">
        //         Payment Card
        //     </li>
        //     <li className="settings-navbar-list__item">
        //         Shopping History
        //     </li>
        //     <li className="settings-navbar-list__item">
        //         Language
        //         <span className="settings-navbar-list__language">
        //             English
        //         </span>
        //     </li>
        //     <li className="settings-navbar-list__item">
        //         Dark Theme
        //         <Switcher/>
        //     </li>
        //     <li className="settings-navbar-list__item">
        //         Change Password
        //     </li>
        //     <li className="settings-navbar-list__item">
        //         Find Marmelad
        //     </li>
        //     <li className="settings-navbar-list__item">
        //         Delete Account
        //     </li>
        //     <li className="settings-navbar-list__item">
        //         Log Out
        //     </li>
        // </ul>
        <ul className="settings-navbar-list">
            <li className="settings-navbar-list__item-link-container">
                <Link to="/language" className="settings-navbar-list__item-link">
                    Log in
                </Link>
            </li>
            <li className="settings-navbar-list__item-link-container">
                <Link to="/language" className="settings-navbar-list__item-link">
                    Create Account
                </Link>
            </li>
            <li className="settings-navbar-list__item-link-container">
                <Link to="/language" className="settings-navbar-list__item-link">
                    Language
                    <span className="settings-navbar-list__language">
                    English
                </span>
                </Link>
            </li>
            <li className="settings-navbar-list__item">
                Dark Theme
                <Switcher/>
            </li>
            <li className="settings-navbar-list__item-link-container">
                <Link to="/language" className="settings-navbar-list__item-link">
                    Find Marmelad
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;