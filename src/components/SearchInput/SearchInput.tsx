import React from 'react';
import "./SearchInput.scss";
import {ReactSVG} from "react-svg";
import SearchIcon from "./Imgs/search-icon.svg";

const SearchInput: React.FC = () => {
    return (
        <form className="search-input">
            <input type="text" placeholder="Search" name="search" className="search-input__input"/>
            <button type="submit" className="search-input__button">
                <ReactSVG src={SearchIcon} className="search-input__search-icon"/>
            </button>
        </form>
    );
};

export default SearchInput;