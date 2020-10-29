import React from 'react';
import "./Item.scss";
import concealer from './imgs/concealer.jpg';
import smallPalette from './imgs/small-palette.jpeg';
import palette from "./imgs/palette.png";
import natashaDenonaPalette from './imgs/natasha-denona-palette.jpg';
import fentyCosmetics from './imgs/fenty-beuty-cosmetics.jpg';
import nudePalette from './imgs/nude-palette.jpg';
import {ReactSVG} from "react-svg";
import shoppingCart from "./imgs/shopping-cart.svg";
import {Link} from 'react-router-dom';

const Item: React.FC = () => {
    return (
        <>
            <li className="cosmetics-list-item">
                <Link to="/page">
                    <div className="cosmetics-list-item__img-container">
                        <img src={concealer} className="cosmetics-list-item__img" alt="Cosmetics"/>
                        <div className="cosmetics-list-item__price-container">
                        <span className="cosmetics-list-item__price">
                            $20
                        </span>
                            <span className="cosmetics-list-item__price-icon-container">
                            <ReactSVG src={shoppingCart} className="cosmetics-list-item__price-icon"/>
                        </span>
                        </div>
                    </div>
                    <div className="cosmetics-list-item__product-description">
                    <span className="cosmetics-list-item__product-name">
                        Hide concealer
                    </span>
                        <br/>
                        by fenty beauty
                    </div>
                </Link>
            </li>
            <li className="cosmetics-list-item">
                <Link to="/page">
                    <div className="cosmetics-list-item__img-container">
                        <img src={smallPalette} className="cosmetics-list-item__img" alt="Cosmetics"/>
                        <div className="cosmetics-list-item__price-container">
                        <span className="cosmetics-list-item__price">
                            $20
                        </span>
                            <span className="cosmetics-list-item__price-icon-container">
                            <ReactSVG src={shoppingCart} className="cosmetics-list-item__price-icon"/>
                        </span>
                        </div>
                    </div>
                    <div className="cosmetics-list-item__product-description">
                    <span className="cosmetics-list-item__product-name">
                        Small palette
                    </span>
                        <br/>
                        by Natasha Denona
                    </div>
                </Link>
            </li>
            <li className="cosmetics-list-item">
                <Link to="/page">
                    <div className="cosmetics-list-item__img-container">
                        <img src={nudePalette} className="cosmetics-list-item__img" alt="Cosmetics"/>
                        <div className="cosmetics-list-item__price-container">
                        <span className="cosmetics-list-item__price">
                            $20
                        </span>
                            <span className="cosmetics-list-item__price-icon-container">
                            <ReactSVG src={shoppingCart} className="cosmetics-list-item__price-icon"/>
                        </span>
                        </div>
                    </div>
                    <div className="cosmetics-list-item__product-description">
                    <span className="cosmetics-list-item__product-name">
                        Nude palette
                    </span>
                        <br/>
                        by Huda Beauty
                    </div>
                </Link>
            </li>
            <li className="cosmetics-list-item">
                <Link to="/page">
                    <div className="cosmetics-list-item__img-container">
                        <img src={palette} className="cosmetics-list-item__img" alt="Cosmetics"/>
                        <div className="cosmetics-list-item__price-container">
                        <span className="cosmetics-list-item__price">
                            $20
                        </span>
                            <span className="cosmetics-list-item__price-icon-container">
                            <ReactSVG src={shoppingCart} className="cosmetics-list-item__price-icon"/>
                        </span>
                        </div>
                    </div>
                    <div className="cosmetics-list-item__product-description">
                    <span className="cosmetics-list-item__product-name">
                        Mercury palette
                    </span>
                        <br/>
                        by Huda Beauty
                    </div>
                </Link>
            </li>
            <li className="cosmetics-list-item">
                <Link to="/page">
                    <div className="cosmetics-list-item__img-container">
                        <img src={natashaDenonaPalette} className="cosmetics-list-item__img" alt="Cosmetics"/>
                        <div className="cosmetics-list-item__price-container">
                        <span className="cosmetics-list-item__price">
                            $20
                        </span>
                            <span className="cosmetics-list-item__price-icon-container">
                            <ReactSVG src={shoppingCart} className="cosmetics-list-item__price-icon"/>
                        </span>
                        </div>
                    </div>
                    <div className="cosmetics-list-item__product-description">
                    <span className="cosmetics-list-item__product-name">
                        Palette
                    </span>
                        <br/>
                        by Natasha Denona
                    </div>
                </Link>
            </li>
            <li className="cosmetics-list-item">
                <Link to="/page">
                    <div className="cosmetics-list-item__img-container">
                        <img src={fentyCosmetics} className="cosmetics-list-item__img" alt="Cosmetics"/>
                        <div className="cosmetics-list-item__price-container">
                        <span className="cosmetics-list-item__price">
                            $20
                        </span>
                            <span className="cosmetics-list-item__price-icon-container">
                            <ReactSVG src={shoppingCart} className="cosmetics-list-item__price-icon"/>
                        </span>
                        </div>
                    </div>
                    <div className="cosmetics-list-item__product-description">
                    <span className="cosmetics-list-item__product-name">
                        Fenty Cosmetics
                    </span>
                        <br/>
                        by fenty beauty
                    </div>
                </Link>
            </li>
        </>
    );
};

export default Item;