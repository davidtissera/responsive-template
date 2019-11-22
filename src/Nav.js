import React, { Component } from 'react';
import { Link } from "react-scroll";
import './Nav.css';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "nav",
      scrolled: false
    }
    this.navScrollHandler = this.navScrollHandler.bind(this)
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.navScrollHandler);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.navScrollHandler);
  }

  navScrollHandler = () => {

    if (window.scrollY > 280){
      this.setState({
        scrolled: true
      })
    }
    else {
      this.setState({
        scrolled: false
      })
    }
  }

  render() {
    const { componentName, scrolled } = this.state
    return(
      <nav 
        className={`${componentName}${scrolled ? "-scrolled" : ""}`}>
        <NavButtonContainer />
      </nav>
    );
  }
}

class NavButtonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "button-container"
    }
  }
  render() {
    const { componentName } = this.state

    return (
      <div class={`${componentName}`}>
        <Link 
          activeClass="active"
          to="content-information-1"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className={`${componentName}-link-1`}>
          <div className={`${componentName}-button-1`}></div>
        </Link>
        <Link 
          activeClass="active"
          to="content-information-2"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className={`${componentName}-link-2`}>
          <div className={`${componentName}-button-2`}></div>
        </Link>
        <Link 
          activeClass="active"
          to="content-information-3"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className={`${componentName}-link-3`}>
          <div className={`${componentName}-button-3`}></div>
        </Link>
        <Link 
          activeClass="active"
          to="content-information-4"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className={`${componentName}-link-4`}>
          <div className={`${componentName}-button-4`}></div>
        </Link>
      </div>
    );
  }
}

export default Nav;