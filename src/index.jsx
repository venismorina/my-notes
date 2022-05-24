import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { store } from 'app/store'
import { Provider } from 'react-redux'

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading</p>} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </PersistGate>

    </Provider>
  </React.StrictMode>
);

