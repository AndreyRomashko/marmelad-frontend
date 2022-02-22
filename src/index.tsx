import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./styles/checkbox.scss";
import "./styles/field.scss";
import "./styles/login-header.scss";
import "./styles/button.scss";
import "./styles/radio-button.scss";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enVocabulary from "./locales/en.json"
import {Provider} from "react-redux";
import {store} from "./utils/store";



i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: enVocabulary
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
           <App/>
       </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


