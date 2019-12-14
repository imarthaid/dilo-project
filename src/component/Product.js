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
            // <Category />
            // <Category linkgambar="img/conan.jpg" />
            // <Category linkgambar="img/onepiece.jpeg" />
            // <Category linkgambar="img/tsubasa.jpg" />
        )
    }
}

export default Product;