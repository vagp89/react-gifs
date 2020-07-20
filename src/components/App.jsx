import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "cfuL5gqFDreXxkWQ4o"
    };
    this.search("homer, thinking");
  }

  search = (query) => {
    giphy('sgwTqFgyTbXT2DOoaQw88h9CYmuGFRnH').search({
      q: query,
      rating: 'g',
      limit: 6
    }, (error, result) => {
      //update the state
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <h1> Giphy Single Page Application</h1>
        <div className="left-scene">
          <SearchBar onSearch={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
