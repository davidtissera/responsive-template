import React, { Component } from 'react';
import Information from './Information';
import './Content.css';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "content"
    }
  }
  render(){
    const { componentName } = this.state
    return(
      <div className={componentName}>
        <div class={`${componentName}-info-container`}>
        <Information
        className={`${componentName}-information-1`}
        />
        <Information
        className={`${componentName}-information-2`}
        />
        <Information
        className={`${componentName}-information-3`}
        />
        <Information
        className={`${componentName}-information-4`}
        />
        </div>
      </div>
    );
  }
}

export default Content;