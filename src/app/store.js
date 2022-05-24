import { configureStore, combineReducers } from "@reduxjs/toolkit";
import notesReducer from "features/notes/notesSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
    notes: notesReducer
})

const persistConfig = {
    key: "redux",
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
})