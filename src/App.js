import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Top from './component/Top';
import Footer from './component/Footer';
import Product from './component/Product';
import Detail from './component/Detail';
import Cart from './component/Cart';
import Default from './component/Default';
import Login from './component/Login';
import Regist from './component/Regist';

class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Top/>
        <Switch>
          <Route exact path="/" component={Product}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/regist" component={Regist}></Route>
          <Route component={Default}></Route>
        </Switch>
      <Footer/>
    </React.Fragment>
  );
}
}

export default App;
