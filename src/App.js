import React, { Component } from 'react';
import BoardContainer from './js/components/board-container'

class App extends Component {
  render() {
    return (
      <div className="App container" id="app">
        <BoardContainer />
      </div>
    );
  }
}

export default App;
