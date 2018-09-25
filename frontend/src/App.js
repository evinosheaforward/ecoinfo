import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Page from './Page.jsx';
import Head from './Header.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div className="App">
					<Head/>
					<Page/>
      	</div>
			</Router>
    );
  }
}

export default App;
