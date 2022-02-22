import {useEffect, useState} from "react";
import {WindowResponse} from "../utils";

export const useMobileStatus = (
    onResize: Function = (e: any, isMob: boolean, isTablet: boolean) => null,
    initialState = false
) => {
    const [isMobile, setIsMobile] = useState(initialState);

    useEffect(() => {
        const wr = new WindowResponse((e: any, isMob: boolean, isTablet: boolean) => {
            setIsMobile(isMob || isTablet);
            onResize(e, isMob, isTablet);
        });
        return () => wr.destroy();
    }, [onResize]);

    return isMobile;
};
