import React from 'react'
import './App.css';

class App3 extends React.Component {
constructor() {
  super();
  this.state = {color: "white"};
  this.text = "Copyright 2023 Nixgit2000";
}

  render() {
    return <div class="App3" style={this.state}>{this.text}</div>
  }
}

export default App3;

