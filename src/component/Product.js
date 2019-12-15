import React, {Component} from 'react';
// import { Container, Col } from 'react-bootstrap';
import Category from './Category';

class Product extends Component {
    render(){
        return(
            <div>
            <Category title="Komik"/>
            <Category title="Novel"/>
            <Category title="Sembarang"/>
            </div>
        )
    }
}

export default Product;