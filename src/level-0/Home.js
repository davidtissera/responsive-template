import React, { Component } from 'react'
import Header from '../level-1/Header'
import Aside from '../level-1/Aside'
import Nav from '../level-1/Nav';
import Content from '../level-1/Content';
import Footer from '../level-1/Footer';

class Home extends Component {

  render(){

    return (
      <div className="home">
        <Header />
        <Aside />
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home