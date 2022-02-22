import React from 'react';
import home from "../DockMenu/imgs/home.svg";
import card from "../DockMenu/imgs/card.svg";
import products from "../DockMenu/imgs/products.svg";
import settings from "../DockMenu/imgs/settings.svg";
import {Link} from "react-router-dom";
import "./AsideMenu.scss";
import {ReactSVG} from "react-svg";

const AsideMenu: React.FC = () => {
    return (
        <nav className="aside-menu">
            <ul className="aside-menu__list">
                <li className="aside-menu__list-item">
                    <Link to="/" className="aside-menu__list-item-link">
                        <ReactSVG src={home} alt="home" className="aside-menu__list-item-link-icon"/>
                        <div className="aside-menu__list-item-text">
                            
                        </div>
                    </Link>
                </li>
                <li className="aside-menu__list-item">
                    <Link to="/products" className="aside-menu__list-item-link">
                        <ReactSVG src={products} alt="products" className="aside-menu__list-item-link-icon"/>
                    </Link>
                </li>
                <li className="aside-menu__list-item">
                    <Link to="/card" className="aside-menu__list-item-link">
                        <ReactSVG src={card} alt="card" className="aside-menu__list-item-link-icon"/>
                    </Link>
                </li>
                <li className="aside-menu__list-item">
                    <Link to="/settings" className="aside-menu__list-item-link">
                        <ReactSVG src={settings} alt="settings" className="aside-menu__list-item-link-icon"/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default AsideMenu;
