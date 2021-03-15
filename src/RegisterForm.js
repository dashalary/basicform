import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RegisterForm = () => ( 
    <div>
        <h2>Register here!</h2>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Email is required.';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Please enter a valid email address.';
                } else if (!values.password) {
                    errors.password = 'Password is required.'
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                alert('Form is validated')
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                <Field type="email" name="email" placeholder="Your email address" />
                <br></br>
                <br></br>
                <ErrorMessage name="email" component="div" />
                <br></br>
                <Field type="password" name="password" placeholder="Your password"/>
                <br></br>
                <br></br>
                <ErrorMessage name="password" component="div" />
                <br></br>
                <br></br>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
            )}
        </Formik>
    </div>
)

export default RegisterForm