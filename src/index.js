import React from 'react';
import ReactDOM from 'react-dom';

// import './assets/css/index.css';
import './assets/css/main.css';

import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';


const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
    , document.getElementById('root'));
