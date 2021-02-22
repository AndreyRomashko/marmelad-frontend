import React from 'react';
import {Field, Form, Formik} from "formik";
import "./AddCosmeticsForm.scss";

const AddCosmeticsForm: React.FC = () => {
    return (
        <Formik
            initialValues={{productName: '', brandName: '', price: '', description: ''}}
            onSubmit={(event) => console.log(event)}>
            {() => (
                <Form className="add-cosmetics-form">
                    <label className="field__label">
                        Product name
                    </label>
                    <Field type="text" name="productName" className="field" placeholder="Product"/>
                    <div className="add-cosmetics-form__fields-container">
                        <div className="add-cosmetics-form__brand-container">
                            <label className="field__label">
                                Brand name
                            </label>
                            <Field type="text" name="brandName" className="field" placeholder="Brand"/>
                        </div>
                        <div className="add-cosmetics-form__price-container">
                            <label className="field__label">
                                Price($)
                            </label>
                            <Field type="text" name="price" className="field" placeholder="00"/>
                        </div>
                    </div>
                    <label className="field__label">
                        Description
                    </label>
                    <Field type="text" name="description" className="field add-cosmetics-form__textarea"
                           placeholder="Description" component="textarea"/>
                    <div className="add-cosmetics-form__buttons-container">
                        <button className="button__decline">
                            Cancel
                        </button>
                        <button className="button__accept">
                            Add
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AddCosmeticsForm;