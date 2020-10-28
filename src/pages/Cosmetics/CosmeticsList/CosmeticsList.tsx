import React from 'react';
import Item from "./Item/Item";
import "./CosmeticList.scss";

const CosmeticsList: React.FC = () => {
    return (
            <ul className="cosmetics-list">
                <Item/>
            </ul>
    );
};

export default CosmeticsList;