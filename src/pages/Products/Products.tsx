import React from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import List from "./Services/List/List";
import Heading from "../../components/Heading/Heading";

const Products: React.FC = () => {
    return (
        <>
            <Heading text="Services"/>
            <SearchInput/>
            <List/>
        </>
    );
};

export default Products;