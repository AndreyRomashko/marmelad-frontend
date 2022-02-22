import React from 'react';
import {Formik, Form, Field} from "formik";
import "./Login.scss";
import Buttons from "../Common/Buttons/Buttons";

const Login: React.FC = () => {
    return (
        <div className="login">
            <span className="login-header">
                Login
            </span>
            <Formik
                initialValues={{email: '', password: '', checked: []}}
                onSubmit={(event) => console.log(event)}>
                {() => (
                    <Form className="login__form">
                        <label className="field__label">
                            Email
                        </label>
                        <Field type="email" name="email" className="field" placeholder="email@email.com"/>
                        <label className="field__label">
                            Password
                        </label>
                        <Field type="password" name="password" className="field" placeholder="Password"/>
                        <Buttons/>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;