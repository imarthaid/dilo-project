import React, {Component} from 'react';
import { Container, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Detail extends Component {
    render(){
        return(
            <Container className="mt-4" style={{minHeight: '610px'}}>
                <p style={{fontSize: '12px'}}>Kategori / Komik / Naruto</p>

                <Col className="d-flex">
                    <div className="box-img mr-5" style={{height: '400px'}}>
                        <img src="img/onepiece.jpeg" alt="img" height="100%"></img>
                    </div>

                    <div className="box-detail">
                        <h2>One Piece</h2>
                        <h5 className="text-secondary">Rp 50.000   </h5>
                        <br></br>
                        <div className="min-plus">
                            <button className="btn btn-secondary rounded-circle py-1 mr-2">-</button>
                            <input type="text py-2" style={{width: '50px',padding: '5px 15px', borderRadius: '5px',border: 'none', borderBottom: '1px solid #aaa' }} value="01"></input>
                            <button className="btn btn-secondary rounded-circle py-1 ml-2">+</button>
                            <p className="d-inline ml-2 text-info">Tersedia -> 30</p>
                        </div>
                        <Link to="/cart" className="btn btn-success mt-5" style={{width: '200px'}}>
                            Add Cart
                        </Link>
                        <Link to="/cart" className="btn btn-secondary mt-2 d-block" style={{width: '200px'}}>
                            Add to Whislist
                        </Link>

                        <h5 className="mt-5">Info Produk</h5>
                        <ul className="list-unstyled text-secondary">
                        <li>Berat <span className="ml-3">|</span> 500gr</li>
                        <li>Kondisi <span className="ml-1">|</span> Baru</li>
                        </ul>
                    </div>
                </Col>
            </Container>
        )
    }
}

export default Detail;