import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'

const DATA = [
    {
        id: 1,
        name: "Alice"
    },
    {
        id: 2,
        name: "Bob"
    },
    {
        id: 3,
        name: "Cindy"
    },
    {
        id: 4,
        name: "Dave"
    }
];

ReactDOM.render(<App data={ DATA } />, document.getElementById('root'));
