import React, { Component } from 'react';

import { Col, Container, Row, Footer } from 'mdbreact';


class PageFooter extends Component {
  render() {
    return (
			<Footer color="blue" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
					<Row>
					<Col sm="6">
            <h5 className="title">Evin O'Shea - Info</h5>
          </Col>
					<Col sm="6">
						<h6>Thanks for looking at my page!</h6>
          </Col>
          </Row>
        </Container>
    </Footer>
		);
  }
}

export default PageFooter;
