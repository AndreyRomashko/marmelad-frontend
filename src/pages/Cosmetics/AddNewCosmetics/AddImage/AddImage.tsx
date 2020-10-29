import React from 'react';
import {ReactSVG} from "react-svg";
import newProduct from "./imgs/new-product.svg";
import "./AddImage.scss";

const AddImage: React.FC = () => {
    return (<div className="add-image">
            <ReactSVG src={newProduct} className="add-image__icon"/>
            <span  className="add-image__text">
                Upload product photo
            </span>
        </div>
    );
};

export default AddImage;