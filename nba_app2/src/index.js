import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './stylesheets/index.css';
import { firebase } from './firebase';

firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})

