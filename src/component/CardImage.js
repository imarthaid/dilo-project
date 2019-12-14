import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

class CardImage extends Component {
    render(){
        return(
            
            <Card style={{ width: '12rem' }} className="mr-3">
              <Card.Img variant="top" src={this.props.linkgambar} className="height-20"/>
              <Card.Body>
                <Card.Title>Naruto Shippuden</Card.Title>
                <Card.Text>
                  <p className="text-secondary">Masashi Kishimoto</p>
                </Card.Text>
                <Link to="/detail" className="btn btn-primary" style={{width: '100%'}}>Detail</Link>
              </Card.Body>
            </Card>
        )
    }
}

export default CardImage;