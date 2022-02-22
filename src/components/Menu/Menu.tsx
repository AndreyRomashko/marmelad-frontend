import React, {memo} from 'react';
import DockMenu from "../DockMenu/DockMenu";
import {useMobileStatus} from "../../hooks";
import AsideMenu from '../AsideMenu/AsideMenu';

const Menu: React.FC | null = () => {
    const isMobile = useMobileStatus();
    return isMobile ? <DockMenu/> : <AsideMenu/>
};

export default memo(Menu);
