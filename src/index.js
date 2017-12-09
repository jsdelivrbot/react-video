import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import API from './secrets.json';

const API_KEY = API['youtube']

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'football'}, (videos)  => {
            this.setState({ videos });
        });

    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }


}

// Render component to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
