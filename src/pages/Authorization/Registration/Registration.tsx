import React from 'react';
import {Field, Form, Formik} from "formik";
import Buttons from "../Common/Buttons/Buttons";
import "./Registration.scss";
import PasswordInfo from "./PasswordInfo/PasswordInfo";
import Fields from './Fields/Fields';

const Registration: React.FC = () => {
    return (
        <div className="registration">
             <span className="login-header">
                Registration
            </span>
            <Formik
                initialValues={{email: '', password: '', checked: []}}
                onSubmit={(event) => console.log(event)}>
                {() => (
                    <Form className="registration__form">
                        <Fields/>
                        <PasswordInfo/>
                        <label className="checkbox__label">
                            <Field type="checkbox" name="checked" value="Agree" className="registration__form-input"/>
                            <span className="checkbox__checkmark"/>
                            I read and agree with&nbsp;
                            <a href="/#" className="registration__form-link">
                                privacy policy&nbsp;
                            </a>
                            and&nbsp;
                            <a  href="/#" className="registration__form-label-link">
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
