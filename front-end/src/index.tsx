/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Favicon url="https://raw.githubusercontent.com/ChrisHenriqueOliveira/mega-hack-finquest/master/src/assets/icon.ico" />
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
