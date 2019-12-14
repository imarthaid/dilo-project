import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CardImage from './CardImage';

class Category extends Component {
    render(){
        return(
        <Container>
        <Row className="mt-5">
          <Col>
          <h3 className="text-success">{this.props.title}</h3>
          <hr></hr>
          <div className="d-flex">
            <CardImage linkgambar="img/naruto.jpg"/>
            <CardImage linkgambar="img/conan.jpg"/>
            <CardImage linkgambar="img/onepiece.jpeg"/>
            <CardImage linkgambar="img/tsubasa.jpg"/>
            </div>
          </Col>
        </Row>
        </Container>
        )
    }
}

export default Category;
