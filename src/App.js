import React, { Component } from 'react';
import './App.css';
import Component2 from './Demo';
class App extends Component {

  render() {
    return (
      <>
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">useMobileDetect - React hook</h3>
            <p>Detect the device so that you can flag and show device specific stuffs.</p>
          </div>
        </header>
        <main className="inner cover">
          <Component2 />
        </main>
        <footer className="mastfoot mt-auto">
          <a href="https://github.com/haldarmahesh/use-mobile-detect-hook" target="_blank" rel="noopener noreferrer">Github</a><br/>
          <a href="https://www.npmjs.com/package/use-mobile-detect-hook" target="_blank" rel="noopener noreferrer">Documentation</a>
        </footer>
      </>
    );
  }
}

export default App;
