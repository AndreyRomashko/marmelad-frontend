import React, {memo} from 'react';
import DockMenu from "../DockMenu/DockMenu";
import {useMobileStatus} from "../../hooks";

const Menu: React.FC | null = () => {
    const isMobile = useMobileStatus();
    return isMobile ? <DockMenu/> : null
};

export default memo(Menu);
