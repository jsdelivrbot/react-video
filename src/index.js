import React from 'react';
import ReactDOM from 'react-dom';
import API from './secrets.json';

import SearchBar from './components/search_bar';

const API_KEY = API['youtube']
// Component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

// Render component to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
