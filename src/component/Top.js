import React, {Component} from 'react';
import {Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';

class Top extends Component {
  render(){
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Toko Buku Gaptechnology</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Cari buku disini.." className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Button variant="btn btn-success ml-5">Login</Button>
    </Container>
  </Navbar>
  );
}
}

export default Top;
