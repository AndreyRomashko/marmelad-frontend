import React from 'react';
import {Formik, Form, Field} from "formik";
import {GoogleLogin} from 'react-google-login';
import "./Authorization.scss";

const Authorization: React.FC = () => {
    const responseGoogle = (response: any) => {
        console.log(response);
    };

    return (
        <div className="login">
            <span className="login__header">
                Login
            </span>
            <Formik
                initialValues={{email: '', password: '', checked: []}}
                onSubmit={(event) => console.log(event)}>
                {({}) => (
                    <Form className="login__form">
                        <label className="field__label">
                            Email
                        </label>
                        <Field type="email" name="email" className="field" placeholder="email@email.com"/>
                        <label className="field__label">
                            Password
                        </label>
                        <Field type="password" name="password" className="field" placeholder="Password"/>
                        <label className="checkbox__label">
                            <Field type="checkbox" name="checked" value="Agree" className="login__form-input"/>
                            <span className="checkbox__checkmark"></span>
                            I read and agree with&nbsp;
                            <a className="login__form-link">
                                privacy policy&nbsp;
                            </a>
                            and&nbsp;
                            <a className="login__form-label-link">
                                terms of service
                            </a>
                        </label>
                        <div className="login__form-buttons-container">
                            <GoogleLogin
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Sign in with google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                className="login__form-button-google"
                                cookiePolicy={'single_host_origin'}
                            />
                            <button type="submit" className="login__form-button-submit">
                                Log in
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Authorization;