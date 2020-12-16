import React from 'react';
import home from "./imgs/home.svg";
import card from "./imgs/card.svg";
import products from "./imgs/products.svg";
import settings from "./imgs/settings.svg";
import {Link} from "react-router-dom";
import "./AsideMenu.scss";
import {ReactSVG} from "react-svg";

const AsideMenu: React.FC = () => {
    return (
        <nav className="dock-menu">
            <ul className="dock-menu__list">
                <li className="dock-menu__list-item">
                    <Link to="/" className="dock-menu__list-item-link">
                        <ReactSVG src={home} alt="home" className="dock-menu__list-item-link-icon"/>
                    </Link>
                </li>
                <li className="dock-menu__list-item">
                    <Link to="/products" className="dock-menu__list-item-link">
                        <ReactSVG src={products} alt="products" className="dock-menu__list-item-link-icon"/>
                    </Link>
                </li>
                <li className="dock-menu__list-item">
                    <Link to="/card" className="dock-menu__list-item-link">
                        <ReactSVG src={card} alt="card" className="dock-menu__list-item-link-icon"/>
                    </Link>
                </li>
                <li className="dock-menu__list-item">
                    <Link to="/settings" className="dock-menu__list-item-link">
                        <ReactSVG src={settings} alt="settings" className="dock-menu__list-item-link-icon"/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default AsideMenu;
