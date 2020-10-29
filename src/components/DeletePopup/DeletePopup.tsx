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
                    <button className="delete-popup__button-decline">
                        No
                    </button>
                    <button className="delete-popup__button-accept">
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeletePopup;