import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import catsReducer from './catState'
import catSaga from './catSaga'

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer,

  },
  middleware: [saga]
});

saga.run(catSaga);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
