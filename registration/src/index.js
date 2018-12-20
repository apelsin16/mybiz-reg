import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(

        <BrowserRouter basename="/registration/build">
            <App />
        </BrowserRouter>

, document.getElementById('root'));
