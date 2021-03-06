import React, {Component} from 'react';
import {Container, Col, Form, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <Container className="mt-5" style={{minHeight: '600px'}}>
                <Col md={6} className="mx-auto rounded px-4" style={{backgroundColor: '#fafafa'}}> 
                    <div className="regist">
                        <div className="text-center mb-3">
                            <h4 className="pt-3 text-light">Login</h4>
                        </div>
                        <Form>
                            <Form.Group as={Row} controlId="">
                                <Form.Label column sm="3">
                                Email
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control type="text" placeholder="Email" autocomplete="off" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="3">
                                Password
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            
                            <div className="text-right">
                            <Button type="submit" className="btn btn-success px-4">Login</Button>
                            </div>
                        </Form>
                    </div>

                    <div className="text-center">
                    <Link to="/regist">
                        <p className="badge badge-danger mt-4 mx-auto">Belum punya akun? Regist!</p>
                    </Link>
                    </div>
                </Col>
            </Container>
        )
    }
}

export default Login;