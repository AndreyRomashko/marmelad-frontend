import React from 'react';
import Heading from "../../../components/Heading/Heading";
import AddImage from "./AddImage/AddImage";
import "./AddNewCosmetics.scss";
import AddCosmeticsForm from "./AddCosmeticsForm/AddCosmeticsForm";

const AddNewCosmetics: React.FC = () => {
    return (<div className="add-new-cosmetics">
            <Heading text="New product"/>
            <AddImage/>
            <AddCosmeticsForm/>
        </div>
    );
};

export default AddNewCosmetics;