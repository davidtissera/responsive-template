import React, { Component } from 'react';
import Information from './Information';
import './Header.css';

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
          className={`${componentName}-information-1`}
        />
        <Information
          className={`${componentName}-information-2`}
        />
      </div>
    );
  }
}

export default Header;