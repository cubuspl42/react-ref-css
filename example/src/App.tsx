import React from 'react';
import './App.css';

class App extends React.Component {
  private divElement: HTMLDivElement | null = null;

  componentDidMount() {
    console.log(this.divElement!.clientHeight);
  }

  render() {
    return <div className='App' ref={el => this.divElement = el} />;
  }
}

export default App;
