	import React, { Component } from 'react';

	import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap/lib';
	import Col from 'react-bootstrap/lib/Col';
	import Row from 'react-bootstrap/lib/Row';
	import Grid from 'react-bootstrap/lib/Grid';

	import logo from './logo.png';
	import './App.css';

	class Head extends Component {
		handleSelect(eventKey, event) {
	    event.preventDefault();
	    alert(`selected ${eventKey}`);
	  }
	  render() {
	    return (
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Evin O'Shea -- Info</h1>
						<Navbar className="Head" inverse collapseOnSelect>
							<Navbar.Header>
								<Navbar.Brand>
									<a href="/">Evin O'Shea</a>
								</Navbar.Brand>
								<Navbar.Toggle />
							</Navbar.Header>
							<Navbar.Collapse>
								<Nav>
									<NavItem eventKey={1} href="/about">
										About
									</NavItem>
									<NavItem eventKey={2} href="/experience">
										Experience
									</NavItem>
									<NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
										<MenuItem eventKey={3.1}
															href="https:/github.com/evinosheaforward">
											GitHub
										</MenuItem>
										<MenuItem eventKey={3.1}
															href="https:/ecoproductivity.herokuapp.com">
											ECO-Productivity
										</MenuItem>
									</NavDropdown>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
				</header>
	    );
	  }
	}

	export default Head;
