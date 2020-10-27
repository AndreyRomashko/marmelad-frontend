import React, {useMemo} from 'react';
import "./PasswordInfo.scss";
import {PASSWORD_INFO_MIN_HEIGHT} from "../../сonsts";

const PasswordInfo: React.FC = () => {
    const windowHeight = useMemo(() => window.screen.height, [window]);
    const showLongPasswordInfo = useMemo(() => windowHeight >= PASSWORD_INFO_MIN_HEIGHT, [windowHeight, PASSWORD_INFO_MIN_HEIGHT]);

    return <ul className="password-info-list">
        {showLongPasswordInfo ? <>
            <li className="password-info-list__item">
                must have at least 8 characters
            </li>
            <li className="password-info-list__item">
                must have at least 1 capital letter
            </li>
            <li className="password-info-list__item">
                must have at least 1 number
            </li>
        </> : <li className="password-info-list__item-small-device">
            must have at least 8 characters
            1 number and 1 capital letter
        </li>}
    </ul>
};

export default PasswordInfo;