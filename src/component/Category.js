import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card} from 'react-bootstrap';

class Category extends Component {
    render(){
        return(
        <Container>
        <Row className="mt-5">
          <Col>
          <h3 className="text-success">Komik</h3>
          <hr></hr>
          <div className="d-flex">
            <Card style={{ width: '12rem' }} className="mr-1">
              <Card.Img variant="top" src="img/naruto.jpg" className="height-20"/>
              <Card.Body>
                <Card.Title>Naruto Shippuden</Card.Title>
                <Card.Text>
                  <p className="text-secondary">Masashi Kishimoto</p>
                </Card.Text>
                <Link to="/detail" className="btn btn-primary" style={{width: '100%'}}>Detail</Link>
              </Card.Body>
            </Card>
            <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src="img/conan.jpg" className="height-20"/>
              <Card.Body>
                <Card.Title>Detective Conan</Card.Title>
                <Card.Text>
                  <p className="text-secondary">Masashi Kishimoto</p>
                </Card.Text>
                <Link to="/detail" className="btn btn-primary" style={{width: '100%'}}>Detail</Link>
              </Card.Body>
            </Card>
            </div>
          </Col>
        </Row>
        </Container>
        )
    }
}

export default Category;
