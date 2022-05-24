import { createSlice, nanoid } from "@reduxjs/toolkit";


// import notes from "data/notes";

const initialState = [
    {
        "id": nanoid(),
        "title": "Hello world",
        "content": "Hello world"
    }
];

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        noteAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(data){
                return {
                    payload: {
                        id: nanoid(),
                        title: data.title,
                        content: data.content
                    }
                }
            }
        },
        noteEdited: {
            reducer(state, action) {
                const index = state.findIndex(note => note.id === action.payload.id);
                state[index] = action.payload;
            },
            prepare(data){
                return {
                    payload: {
                        id: data.id,
                        title: data.title,
                        content: data.content
                    }
                }
            }
        },
        noteDeleted: {
            reducer(state, action) {
                const index = state.findIndex(note => note.id === action);
                state.splice(index);
            }
        }
    }
})

export const selectAllNotes = (state) => state.notes;
export const selectNoteById = (state, id) => state.notes.find(note => note.id === id);

export const { noteAdded, noteEdited, noteDeleted } = notesSlice.actions;

export default notesSlice.reducer