import React from 'react';
import "./DeletePopup.scss";

const DeletePopup: React.FC = () => {
    return (
        <div className="delete-popup">
            <div className="delete-popup__container">
                <h1 className="delete-popup__text">
                    Delete Macadamia natural oil?
                </h1>
                <div className="delete-popup__buttons-container">
                    <button className="button__decline">
                        No
                    </button>
                    <button className="button__decline">
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeletePopup;