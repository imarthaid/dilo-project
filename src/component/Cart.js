import React, {Component} from 'react';
import { Container, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Cart extends Component {
    render(){
        return(
            <Container className="mt-5" style={{minHeight: '650px'}}>
                <Col>
                    <div className="text-center">
                        <h3 className="text-info">Your Cart</h3>
                        <p className="text-secondary">Ayo selesaikan pembayaran kamu!</p>
                    </div>

                    <div className="full-cart d-flex justify-content-between">
                    
                        <div>
                        <h6>Your Items</h6>
                        <div className="card-box d-flex mb-3">
                            <div>
                                <img src="img/naruto.jpg" style={{width:'100px', height: '120px'}} alt=""/>
                            </div>

                            <div className="min-plus mt-3 ml-4">
                                <h5 className="">Naruto Shippuden</h5>
                                <button className="btn btn-secondary rounded-circle py-1 mr-2">-</button>
                                <input type="text py-2" style={{width: '50px',padding: '5px 15px', borderRadius: '5px',border: 'none', borderBottom: '1px solid #aaa' }} value="01"></input>
                                <button className="btn btn-secondary rounded-circle py-1 ml-2">+</button>
                                <p className="d-inline ml-2 text-info">Tersedia -> 30</p>

                                <button className="btn btn-danger rounded-circle py-1 ml-5">x</button>
                            </div>
                        </div>

                        <div className="card-box d-flex">
                            <div>
                                <img src="img/onepiece.jpeg" style={{width:'100px', height: '120px'}} alt=""/>
                            </div>

                            <div className="min-plus mt-3 ml-4">
                                <h5 className="mb-3">One Piece</h5>
                                <button className="btn btn-secondary rounded-circle py-1 mr-2">-</button>
                                <input type="text py-2" style={{width: '50px',padding: '5px 15px', borderRadius: '5px',border: 'none', borderBottom: '1px solid #aaa' }} value="01"></input>
                                <button className="btn btn-secondary rounded-circle py-1 ml-2">+</button>
                                <p className="d-inline ml-2 text-info">Tersedia -> 30</p>

                                <button className="btn btn-danger rounded-circle py-1 ml-5">x</button>
                            </div>
                        </div>
                        </div>

                        <div className="side-cart rounded-lg mt-4 py-3 px-4" style={{width: '450px', backgroundColor: '#fafafa'}}>
                            <h5 className="text-secondary">Informasi Biaya</h5>
                            <hr/>
                            <div className="info-box mb-3">
                                <h6 className="">Naruto Shippuden</h6>
                                <p className="text-secondary float-left" style={{margin: '0', padding: '0'}}>2 Items</p>
                                <p className="text-info text-right" style={{margin: '0', padding: '0'}}>Rp <span className="ml-3">100.000</span></p>
                            </div>
                            
                            <div className="info-box mb-3">
                                <h6 className="">One Piece</h6>
                                <p className="text-secondary float-left" style={{margin: '0', padding: '0'}}>2 Items</p>
                                <p className="text-info text-right" style={{margin: '0', padding: '0'}}>Rp <span className="ml-3">100.000</span></p>
                            </div>

                            <div className="info-box">
                                <h6 className="">Ongkir</h6>
                                <p className="text-secondary float-left" style={{margin: '0', padding: '0'}}>JNE</p>
                                <p className="text-info text-right" style={{margin: '0', padding: '0'}}>Rp <span className="ml-3">50.000</span></p>
                            </div>

                            <hr/>

                            <div className="info-box">
                                <h5 className="float-left">Total</h5>
                                <p className="text-primary text-right" style={{margin: '0', padding: '0'}}>Rp <span className="ml-3">250.000</span></p>
                            </div>

                            <Link to="/" className="btn btn-secondary mt-5 mr-3" style={{width: '150px'}}>
                            Cancel
                            </Link>

                            <Link to="/checkout" className="btn btn-success mt-5" style={{width: '150px'}}>
                            Checkout
                            </Link>
                        </div>

                        
                    </div>

                    

                    
                </Col>
            </Container>
        )
    }
}

export default Cart;