import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
//import { Parallax, Background } from 'react-parallax';

import Page from './Page.jsx';
import Head from './Header.jsx';
import Footer from './Footer.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div className="App">
					<Head/>
					<Page/>
					<Footer/>
      	</div>
			</Router>
    );
  }
}

export default App;
