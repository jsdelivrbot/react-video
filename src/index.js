import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import API from './secrets.json';

import SearchBar from './components/search_bar';

const API_KEY = API['youtube']



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos)  => {
            this.setState({ videos });
        });

    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }


}


// Render component to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
