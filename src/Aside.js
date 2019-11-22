/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import './Aside.css';

class Aside extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "aside",
      clicked: false,
      scrolled: false
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.asideScrollHandler = this.asideScrollHandler.bind(this)
  }

  clickHandler = () => {
    const { clicked } = this.state
    if (clicked === false){
      this.setState({
        clicked: true
      })
    }
    else {
      this.setState({
        clicked: false
      })
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.asideScrollHandler);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.asideScrollHandler);
  }

  asideScrollHandler = () => {

    if (window.scrollY > 5){
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
    const { componentName, clicked, scrolled } = this.state
    return (
      <aside className={`${componentName}${clicked ? "-opened" : "-closed"}${scrolled ? " scrolled" : ""}`}>
        <MenuButton onClick={this.clickHandler}/>
        <AsideButtonContainer
        style={clicked ? "" : "none"}
        />
      </aside>
    );
  }
}

class AsideButtonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "button-container"
    }
  }
  render() {
    const { componentName } = this.state
    const { style } = this.props

    return (
      <div class={`aside-${componentName}`} style={{display: style}}>
        <Link class={`aside-link-1`} to ="/place1"><div class={`aside-button-1`}>BUTON 1</div></Link>
        <Link class={`aside-link-2`} to ="/place2"><div class={`aside-button-2`}>BUTON 2</div></Link>
        <Link class={`aside-link-3`} to ="/place3"><div class={`aside-button-3`}>BUTON 3</div></Link>
        <Link class={`aside-link-4`} to ="/place4"><div class={`aside-button-4`}>BUTON 4</div></Link>
      </div>
    );
  }
}

export default Aside