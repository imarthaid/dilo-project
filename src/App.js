import React, {Component} from 'react';
import Top from './component/Top';
import Category from './component/Category';
import Footer from './component/Footer';

class App extends Component {
  render(){
  return (
    <div>
      <Top/>
      <Category/>
      <Category/>
      <Category/>
      <Footer/>
    </div>
  );
}
}

export default App;
