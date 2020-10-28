import React from 'react';
import Heading from '../../components/Heading/Heading';
import SearchInput from '../../components/SearchInput/SearchInput';
import CosmeticsList from "./CosmeticsList/CosmeticsList";

const Cosmetics: React.FC = () => {
    return (
        <div>
            <Heading text="Cosmetics"/>
            <SearchInput/>
            <CosmeticsList/>
        </div>
    );
};

export default Cosmetics;