import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//import Sidebar from "react-sidebar";

import './Page.css';

class Page extends Component {
	render() {
		return (
			<body>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/experience" component={Experience} />
			</body>
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
				  &nbsp;&nbsp;This is my personal website, which links to other projects
					that I am working on. Thank you for spending the time to see who I am!
					<br/>
					<br/>
					&nbsp;&nbsp;I am Evin O'Shea. I studied physics as an undergraduate because I love
					to learn and I wanted to learn how the world works. During my time as
					an undergrad I didn't just learn about physics, I also learned a lot about software development.
					I worked on the data processing for NASA's Parker Solar Probe-IS☉IS
					where I learned the ropes of software engineering with Python, Git, SQL,
					logging, log aggregation and archiving, and documentation.
					<br/>
					<br/>
					&nbsp;&nbsp;As I finished my schooling, I decided I wanted to be a software
					developer because I wanted to have help build the future of the internet.
					Though I have worked in software development, I had not used any web development
					frameworks during my work on Solar Probe; I had been working on the back-end/data processing. Now, I have worked
					on projects to showcase my independent projects and my ability to learn.
					<br/>
					<br/>
					&nbsp;&nbsp;I have been studying various software technologies including
					Ruby on Rails, Docker, Golang, React, and more! I have learned a lot and there is always more to learn,
					but I am always ready and excited to learn anything!
					<br/>
					<br/>
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
					and use. Check out the Projects tab and my &nbsp;
					<a href="https://github.com/evinosheaforward">
						github page
					</a>
					&nbsp; to look through my projects!
				</p>
				<p>
					&nbsp;&nbsp;This website is hosted by Heroku through their container registry.
					The project was created in React because it seemed like the best tool
					for a simple, static website. Though React is great, I have also been
					learning about Ruby on Rails and D3.js. Check out my Productivity app
					to see what I have been doing with those tools!
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
				  make models. I use linear algebra and other mathematical tools to formulate models and to decompose systems. These
				  models can be used to predict an element of the system, they can be used to
				  describe and visualize the system, and they can be combined with other models
				  to create application interfaces.
				</p>
				<p>
				  &nbsp;&nbsp;My experience for the last 3 years has been at the data processing center
				  (Science Operations Center) for &nbsp;
					<a href="http://parkersolarprobe.jhuapl.edu/News-Center/Show-Article.php?articleID=86">
						NASA's Parker Solar Probe-IS☉IS
					</a>.
				  &nbsp;We use a postgres database and sqlalchemy to store our telemetry data. We
				  have asynchronous daemons running that regularly run new data through our processing pipeline.
				</p>
				<p>
				  &nbsp;&nbsp;Our data is inserted into our database regularly using a sqlalchemy wrapper that
				  I worked on. The daemon looks for new data and inserts new files as they are synced to our server.
				  Then, the daemon will create all 'raw' data files
				  that there are new data for. These files are then handed off to an ETL framework.
				</p>
				<p>
				  &nbsp;&nbsp;We use an ETL framework which is a file manager and ETL processor. Our files have
					specifications that fit to NASA standards and we use these specs to
					identify the file type, save the file, and then perform all possible
					ETL's for that file. The system is configurable so that any script can be used for file
					identification and any scripts can be used for the ETL. The ETL framework
					was developed at Los Alamos National Lab and is an ongoing internal development.
				</p>
				<p>
					&nbsp;&nbsp;I have contributed heavily writing the ETL scripts that are used by
					our framework for creating science-ready and NASA-standard data products.
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
