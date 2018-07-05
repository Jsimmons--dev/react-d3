import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { D3Component } from './D3Component.js';

class App extends Component {
  constructor(props) {
    super(props);
    let maxBars = 4;
    let randomData = (bars) => {
      return Array(5).fill(0).map(d => Math.random() * bars);
    }
    this.randomBars = () => randomData(maxBars);
    this.state = { chartData: this.randomBars() };
  }

  componentDidMount() {
    setInterval(() => {
    this.setState({ chartData: this.randomBars() });
  }, 2000);
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <D3Component data={this.state.chartData} />
    </div>
  );
}
}

export default App;
