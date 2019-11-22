import React, { Component } from 'react';

class Information extends Component {

  render() {
    const { className, title } = this.props
    return (
      <div className={`${className}`}>{title}</div>
    );
  }
}

export default Information