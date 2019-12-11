import React, {Component} from 'react';
import {Container, Col} from 'react-bootstrap';

class Footer extends Component {
    render(){
        return(
            <Container className="mt-5">
                <Col className="text-center">
                    <p>All Rights Reserved by <a href="imartha.id" className="text-success">Gaptechnology Team</a> Copyright 2019</p>
                </Col>
            </Container>
        )
    }
}

export default Footer;