import React, { Component } from 'react'
import "./MenuButton.css";

class MenuButton extends Component {
  render() {
    const { onClick } = this.props

    return (
      <div class="container">
        <button class="learn-more" onClick={onClick}>
          <span class="circle">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Menu</span>
        </button>
      </div>
    );
  }
}

export default MenuButton