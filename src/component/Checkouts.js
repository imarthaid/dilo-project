import React, {Component} from 'react';
import { Container, Col } from 'react-bootstrap';

class Checkouts extends Component {
    render(){
        return(
            <Container className="" style={{minHeight: '435px', marginTop: '200px'}}>
                <Col>
                    <div className="text-center">
                        <h3 className="text-info"><i class="far fa-check-circle mr-2"></i>Checkout</h3>
                        <p className="text-secondary">Selamat checkout berhasil, barang akan sampai dalam beberapa hari</p>
                    </div>
                </Col>
            </Container>
        )
    }
}

export default Checkouts;