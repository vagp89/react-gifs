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
      selectedGifId: ""
    };
    this.search("homer, thinking");
  }

  search = (query) => {
    giphy('sgwTqFgyTbXT2DOoaQw88h9CYmuGFRnH').search({
      q: query,
      rating: 'g',
      limit:20
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  onClick = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { selectedGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar onSearch={this.search} />
          <div className="selected-gif">
            <Gif gifClassName="gif-left-scene" id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList onClick={this.onClick} gifClassName="gif-right-scene" gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
