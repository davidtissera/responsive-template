import React, { Component } from 'react';
import { Link } from "react-scroll";
import './Nav.css';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "nav",
      scrolled: false,
      clicked: false,
    }
    this.navScrollHandler = this.navScrollHandler.bind(this)
    this.navResizeHandler = this.navResizeHandler.bind(this)
    this.navClickHandler = this.navClickHandler.bind(this)
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.navScrollHandler);
    window.addEventListener('resize', this.navResizeHandler);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.navScrollHandler);
    window.addEventListener('resize', this.navResizeHandler);
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

  navClickHandler = () => {
    const { clicked } = this.state

    if (clicked === false && window.innerWidth < 580) {
      this.setState({
        clicked: true
      })
    }
    else if (clicked === true) {
      this.setState({
        clicked: false
      })
    }
  }

  navResizeHandler = () => {
    if (window.innerWidth > 580){
      this.setState({
        clicked: false
      })
    }
  }

  render() {
    const { componentName, clicked, scrolled } = this.state

    return (
      <nav className={`${componentName}${scrolled ? "-scrolled" : ""}${clicked ? "-clicked" : ""}`}>
        <i className={`fas fa-bars fa-1x`} onClick={this.navClickHandler}></i>
        <NavButtonContainer parentUpdate={this.navClickHandler}/>
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
    const { parentUpdate } = this.props

    return (
      <div className={`${componentName}`}>
        <button className={"button-1"}>
        <Link
          className="link-1"
          to="content-information-1"
          onClick={parentUpdate}
          smooth={true}
          duration={500}
          offset={-150}>
          BUTTON1</Link>
        </button>
        <button className={"button-2"}>
        <Link 
          className="link-2"
          to="content-information-2"
          onClick={parentUpdate}
          smooth={true}
          duration={500}
          offset={-150}>
          BUTTON2</Link>
        </button>
        <button className={"button-3"}>
        <Link 
          className="link-3"
          to="content-information-3"
          onClick={parentUpdate}
          smooth={true}
          duration={500}
          offset={-150}>
          BUTTON3</Link>
        </button>
        <button className={"button-4"}>
        <Link 
        className="link-4"
        to="content-information-4"
        onClick={parentUpdate}
        smooth={true}
        duration={500}
        offset={-150}>
        BUTTON4</Link>
        </button>
      </div>
    );
  }
}

export default Nav;