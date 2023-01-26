import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"}
  }

  render() {
    return <div class="App" style={this.state}>To-Do List</div>
    }
}
export default App;
