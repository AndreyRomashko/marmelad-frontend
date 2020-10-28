import React from 'react';
import cosmetics from "./imgs/cosmetics.jpg";
import beautySalon from "./imgs/beauty-salon.jpg";
import "./List.scss";
import {Link} from 'react-router-dom';

const List: React.FC = () => {
    return (
        <ul className="services-list">
            <li className="services-list__item">
                <Link to="/cosmetics">
                    <img src={cosmetics} alt="cosmetics" className="services-list__item-image"/>
                    <div className="services-list__info-container">
                        <h1 className="services-list__info-header">Cosmetics</h1>
                        <span className="services-list__info-description">Buy the best products for best price, in any place</span>
                    </div>
                </Link>
            </li>
            <li className="services-list__item">
                <Link to="/beauty-salon">
                    <img src={beautySalon} alt="cosmetics" className="services-list__item-image"/>
                    <div className="services-list__info-container">
                        <h1 className="services-list__info-header">Beauty salon</h1>
                        <span className="services-list__info-description">Best services, cozy place</span>
                    </div>
                </Link>
            </li>
        </ul>
    );
};

export default List;