import React from 'react'
import { Formik, Form } from 'formik'

function MyForm(props) {

    const { initialValues, validationSchema, onSubmit, children, reset } = props

    const submit = (values, { resetForm }) => {
        onSubmit(values);
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={reset ? submit : onSubmit}
        >
            {formik =>
                <Form>
                    {children}
                    <button type='submit' disabled={!formik.isValid}>Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default MyForm