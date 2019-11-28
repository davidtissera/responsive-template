import React, { Component } from 'react';
import Information from '../level-2/Information';
import Lorem from '../level-2/lorem';
import './Content.css';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "content",
      resize: false
    }
    this.contentResizeHandler = this.contentResizeHandler.bind(this)
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.contentResizeHandler)
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.contentResizeHandler)
  }

  contentResizeHandler = () => {
    if (window.innerWidth < 580) {
      this.setState({
        resize: true
      })
    }
    else {
      this.setState({
        resize: false
      })
    }
  }

  render(){
    const { componentName, resize } = this.state
    
    return (
      <div className={`${componentName}${resize ? "-resize" : ""}`}>
        <div class={`${componentName}-info-container`}>
        <Information
        className={`${componentName}-information-1`}
        content={Lorem}
        />
        <Information
        className={`${componentName}-information-2`}
        content={Lorem}
        />
        <Information
        className={`${componentName}-information-3`}
        content={Lorem}
        />
        <Information
        className={`${componentName}-information-4`}
        content={Lorem}
        />
        </div>
      </div>
    );
  }
}

export default Content;