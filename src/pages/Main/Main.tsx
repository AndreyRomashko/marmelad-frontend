import React from 'react';
import "./Main.scss";
import Heading from "../../components/Heading/Heading";
import {useTranslation} from "react-i18next";

const Main : React.FC = () => {
    const { t } = useTranslation();
    return (
        <main>
            <Heading text={t("WELCOME_MESSAGE")} type="mod-2"/>
           <Heading text={t("BRAND_NAME")} type="mod-1"/>
            <button className="button__main">
                {t("LEARN_MORE")}
            </button>
        </main>
    );
};

export default Main;
