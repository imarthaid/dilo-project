import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';

class Top extends Component {
  render(){
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><Link to="/" className="text-decoration-none text-white">Toko Buku Gaptechnology</Link></Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Cari buku disini.." className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Link className="btn btn-success mt-6 mx-3" to="/login">Login</Link>
        <div className="my-cart">
          <Link to="cart" className="text-decoration-none hover-green"  >
          <i class="fas fa-cart-plus text-light h3 p-0 float-left mr-2"></i>
          <span className="text-decoration-none text-light d-block mt-1" p-0>My Cart</span>
          </Link>
        </div>
    </Container>
  </Navbar>
  );
}
}

export default Top;
