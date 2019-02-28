import React from 'react';
import ReactDOM from 'react-dom';
import "./static/css/reset.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import confingStore from "./store/index";

const store = confingStore();


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
