import React, { Component } from 'react'

class Information extends Component {

  render() {
    const { className, content } = this.props
    return (
      <div className={`${className}`}>{content}</div>
    );
  }
}

export default Information