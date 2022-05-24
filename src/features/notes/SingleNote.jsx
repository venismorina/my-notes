import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { selectNoteById } from "./notesSlice";

import * as Yup from 'yup'
import { FormikControl, Form } from 'components/form'
import { useDispatch } from 'react-redux'
import { noteEdited, noteDeleted } from './notesSlice';

function SingleNote() {

  const { id } = useParams();

  let navigate = useNavigate();

  const note = useSelector((state) => selectNoteById(state, id));

  const dispatch = useDispatch();

  const initialValues = {
    title: note.title,
    content: note.content,
    id: note.id
  }

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Required'),
    content: Yup.string().required('Required')
  })

  const onSubmit = (values) => {
    dispatch(noteEdited(values));
  }

  const onDelete = () => {
    dispatch(noteDeleted(note.id));
    navigate(-1);
  }

  if (!note) {
    return <p>404</p>
  }

  return (
    <div>
    <Form initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
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
    <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default SingleNote




