import React from 'react';
import {Field, Form, Formik} from "formik";
import Buttons from "../Common/Buttons/Buttons";
import "./Registration.scss";

const Registration: React.FC = () => {
    return (
        <div className="registration">
             <span className="login-header">
                Registration
            </span>
            <Formik
                initialValues={{email: '', password: '', checked: []}}
                onSubmit={(event) => console.log(event)}>
                {({}) => (
                    <Form className="registration__form">
                        <label className="field__label">
                            Email
                        </label>
                        <Field type="email" name="email" className="field" placeholder="email@email.com"/>
                        <label className="field__label">
                            Password
                        </label>
                        <Field type="password" name="password" className="field" placeholder="Password"/>
                        <label className="field__label">
                            Repeat password
                        </label>
                        <Field type="password" name="password" className="field" placeholder="Password"/>
                        <label className="checkbox__label">
                            <Field type="checkbox" name="checked" value="Agree" className="registration__form-input"/>
                            <span className="checkbox__checkmark"></span>
                            I read and agree with&nbsp;
                            <a className="registration__form-link">
                                privacy policy&nbsp;
                            </a>
                            and&nbsp;
                            <a className="registration__form-label-link">
                                terms of service
                            </a>
                        </label>
                        <Buttons/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default Registration;