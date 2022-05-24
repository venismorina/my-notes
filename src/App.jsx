import AddNotes from 'features/notes/AddNotes'
import NotesList from 'features/notes/NotesList'
import SingleNote from 'features/notes/SingleNote'



import Layout from 'components/layout'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<NotesList/>}></Route>
        <Route path="note">
          <Route index element={<AddNotes />}></Route>
          <Route path=':id' element={<SingleNote />}></Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
