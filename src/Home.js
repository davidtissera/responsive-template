import React, { Component } from 'react'
import Header from './Header';
import Aside from './Aside';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';

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