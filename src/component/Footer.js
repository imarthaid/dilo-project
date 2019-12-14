import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

class Footer extends Component {
    render(){
        return(
            <Row className="mt-5 bg-light" >
                <Col className="text-center pt-3" >
                    <p>All Rights Reserved by <a href="imartha.id" className="text-success">Gaptechnology Team</a> Copyright 2019</p>
                </Col>
            </Row>
        )
    }
}

export default Footer;