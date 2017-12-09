import React from 'react';
import ReactDOM from 'react-dom';
import API from './secrets.json';

const API_KEY = API['youtube']
// Component
const App = () => {
    return <p>{}</p>;
}

// Render component to DOM
ReactDOM.render(<App name="here"/>, document.querySelector('.container'));
