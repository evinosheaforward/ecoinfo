import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from "react-sidebar";

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';


import './Page.css';

class Page extends Component {
	render() {
		return (
			<Grid>
			<Row>
				<Col>
					<body>
			        <img src="./psp.jpg"/>
			        <Route exact path="/" component={Home} />
			        <Route path="/about" component={About} />
			        <Route path="/experience" component={Experience} />
					</body>
				</Col>
			</Row>
			</Grid>
		);
	}
}

export default Page;

class Home extends Component {
	render() {
		return (
			<section>
				<h2>
					Hello! &nbsp;&nbsp; Welcome to my personal website!
				</h2>
				<br/>
				<p>
				  &nbsp;&nbsp;This is my main website, which links to other Projects
					that I am hosting and working on.
					<br/>
					<br/>
					&nbsp;&nbsp;This website is the way that I feel most comfortable publicizing myself. As I can demonstrate experience with it.
		  		<br/>
					<br/>
					<br/>
		  		&nbsp;&nbsp;Thank you for spending the time to see who I am!
				</p>
			</section>
		);
	}
}

class About extends Component {
	render() {
		return (
			<section>
				<h2>About the website</h2>
				<p>
				  &nbsp;&nbsp;I have always wanted to publish projects for other people to see
					and use. I also think it would be a great way to
				  learn and show what I have done. I think it will be a great
					way to track my work and progress.
				</p>
				<p>
				  &nbsp;&nbsp;Check out the Projects tab for my upcoming and in progress projects.
					Also look at my &nbsp;
					<a href="https://github.com/evinosheaforward">
						github page
					</a>
					&nbsp; to look through my projects!
				</p>
			</section>
		);
	}
}

class Experience extends Component {
	render() {
		return (
			<section>
				<h2>
					Experience:
				</h2>
				<p>
				  &nbsp;&nbsp;I have been trained in physics, mathematics, and computer science. I have learned to
				  make models. I use linear algebra and other schemes to make models. These
				  models can be used to predict an element of the system, they can be used to
				  describe and visualize the system, and they can be combined with other models
				  to create application interfaces.
				</p>
				<p>
				  &nbsp;&nbsp;My experience for the last 3 years has been at the data processing center
				  (Science Operations Center) for &nbsp;
					<a href="http://parkersolarprobe.jhuapl.edu/News-Center/Show-Article.php?articleID=86">
						NASA's Parker Solar Probe-ISOIS
					</a>.
				  &nbsp;We use a postgres database and sqlalchemy to store our telemetry data. We
				  have asynchronous daemons running that regularly run new data through our processing pipeline.
				</p>
				<p>
				  &nbsp;&nbsp;Our data is inserted to our database regularly using a sqlalchemy wrapper that
				  I have work on. The daemon will look at a 'todo' file
				  and will regularly insert all new data and then create all 'raw' data files
				  that there are new data for. These files are then handed off to the next system.
				</p>
				<p>
				  &nbsp;&nbsp;We use an ETL framework which is a file manager and ETL processer. Our files have
					specifications that fit to NASA standards and we use these specs todo
					identify the filetype, save the file and then perform all possible
					ETL's for that file. The system is configurable so that any script can be used for file
					identification and any scripts can be used for the ETL. The ETL framework
					was developed at Los Alamos National Lab and is an ongoing internal development.
				</p>
				<p>
					&nbsp;&nbsp;I have contributed heavily writing the ETL scripts that are used by
					our framework for creating science-ready and NASA-standard data products.
				</p>
				<p>
				  &nbsp;&nbsp;Soon our data will be hosted on a website and I will be able to link it here!
				</p>
			</section>
		);
	}
}

// class ArticlePreview extends Component {
// 	handlePageChange(t, c) {
//     this.props.updatePage(t, c);
//   }
// }
// Feel free to browse the blog or use the productivity tracker, and please, leave a review of my website!
