import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducers from './reducers/bpp'
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';


// const store = createStore(reducers);
// const root = ReactDOM.createRoot(document.getElementById('root'));

// const listener = () =>  {
//   root.render( <App store={store}/> );
// }
// store.subscribe(listener);
// listener();

const rootReducer = combineReducers({
  reducers,
  // bppReducers,
  // cppReducers
})
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
