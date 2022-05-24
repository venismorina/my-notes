import React from 'react'
import * as Yup from 'yup'
import { FormikControl, Form } from 'components/form'
import { useDispatch } from 'react-redux'
import { noteAdded } from './notesSlice';


function AddNotes() {

    const dispatch = useDispatch();

    const initialValues = {
        title: '',
        content: ''
    }

    const validationSchema = Yup.object({
        title: Yup.string()
            .required('Required'),
        content: Yup.string().required('Required')
    })

    const onSubmit = (values) => {
        dispatch(noteAdded(values));
       
    }

    return (

        <Form initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            reset>
            <FormikControl
                control='input'
                type='text'
                label='Title'
                name='title'
            />
            <FormikControl
                control='textarea'
                type='textarea'
                label='Content'
                name='content'
            />
        </Form>

    )
}

export default AddNotes