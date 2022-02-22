import React from 'react';
import {GoogleLogin} from "react-google-login";
import "./Buttons.scss";

const Buttons: React.FC = () => {
    const responseGoogle = (response: any) => {
        console.log(response);
    };

    return (<div className="login-buttons">
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Sign in with google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="login-buttons__google"
                cookiePolicy={'single_host_origin'}
            />
            <button type="submit" className="login-buttons__submit">
                Log in
            </button>
        </div>
    );
};

export default Buttons;