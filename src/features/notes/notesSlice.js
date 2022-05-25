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
            prepare(id){
                return {
                    payload: {
                        id,
                        title: "New note",
                        content: ""
                    }
                }
            }
        },
        noteDeleted: {
            reducer(state, action) {
                const index = state.findIndex(note => note.id === action);
                state.splice(index);
            }
        },
        noteValueChanged: {
            reducer(state, action) {
                const index = state.findIndex(note => note.id === action.payload.id);
                if(index >= 0) state[index][action.payload.field] = action.payload.value;
            },
            prepare(id, field, value){
                return {
                    payload: {
                        id,
                        field,
                        value
                    }
                }
            }
        },
    }
})

export const selectAllNotes = (state) => state.notes;
export const selectNoteById = (state, id) => state.notes.find(note => note.id === id);

export const { noteAdded, noteDeleted, noteValueChanged } = notesSlice.actions;

export default notesSlice.reducer