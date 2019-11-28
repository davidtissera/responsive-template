import React, { Component } from 'react';
import Information from '../level-2/Information';
import Lorem from '../level-2/lorem';
import './Header.css'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "header"
    }
  }
  render() {
    const { componentName } = this.state

    return (
      <header className={componentName}>
        <HeaderContent />
      </header>
    );
  }
}

class HeaderContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "header-content"
    }
  }
  render() {
    const { componentName } = this.state
    return (
      <div className={`${componentName}`}>
        <div className={`${componentName}-photo`}>
        </div>
        <Information
          content={Lorem}
          className={`${componentName}-information-1`}
        />
      </div>
    );
  }
}


export default Header;