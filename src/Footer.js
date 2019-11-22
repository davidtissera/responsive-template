import React, { Component } from 'react';
import Information from './Information';
import './Footer.css';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentName: "footer"
    }
  }
  render(){
    const { componentName } = this.state
    return(
      <div className={componentName}>
        <Information
        className={`${componentName}-information-1`}/>
        <Information
        className={`${componentName}-information-2`}/>
      </div>
    );
  }
}

export default Footer;