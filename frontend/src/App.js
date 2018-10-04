import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

import Page from './Page.jsx';
import Head from './Header.jsx';
import Footer from './Footer.jsx';


import './App.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div className="App">
					<Grid>
					<Row>
						<Col>
							<Head/>
						</Col>
					</Row>
					<Row>
						<Col>
							<Page/>
						</Col>
					</Row>
					<Row>
						<Col>
							<Footer/>
						</Col>
					</Row>
				</Grid>
      	</div>
			</Router>
    );
  }
}

export default App;
