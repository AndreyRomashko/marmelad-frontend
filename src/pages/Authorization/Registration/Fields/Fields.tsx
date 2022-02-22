import React from 'react';
import {Field} from "formik";

const Fields: React.FC = () => {
    return (
        <>
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
        </>
    );
};

export default Fields;