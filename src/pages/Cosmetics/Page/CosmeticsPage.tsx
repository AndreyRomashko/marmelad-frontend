import React from 'react';
import BackButton from "../../../components/BackButton/BackButton";
import concealer from "./imgs/concealer.jpg";
import "./CosmeticsPage.scss";

const CosmeticsPage: React.FC = () => {
    return (
        <div className="cosmetics-page">
            <BackButton/>
            <img alt={concealer} src={concealer} className="cosmetics-page__image"/>
            <div className="cosmetics-page__info">
                <div className="cosmetics-page__info-header">
                    <div className="cosmetics-page__name-container">
                         <span className="cosmetics-page__name">
                        Macadamia natural oil
                         </span>
                        <br/>
                        <span className="cosmetics-page__brand">
                        by cristal milk
                    </span>
                    </div>
                    <span className="cosmetics-page__price">
                    $20
                </span>
                </div>
                <p className="cosmetics-page__description">
                    Matrixil, which is part of the product, stimulates the production of its own collagen, increasing
                    the firmness and elasticity of the skin, while vitamins and natural plant extracts enhance
                    microcirculation, have a powerful antioxidant effect, improve skin color and microrelief.
                </p>
                <button className="button__main">
                    Add to card
                </button>
            </div>
        </div>
    );
};

export default CosmeticsPage;