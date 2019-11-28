import React, { Component } from 'react';
import Information from '../level-2/Information';
import Lorem from '../level-2/lorem';
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

    return (
      <div className={componentName}>
        <Information
        content={Lorem}
        className={`${componentName}-information-1`}/>
        <Information
        content={Lorem}
        className={`${componentName}-information-2`}/>
      </div>
    );
  }
}

export default Footer;