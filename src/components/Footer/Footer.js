import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
    render() {
      return (
        <div className="footerMain">
          <h2>Footer</h2>
          {this.props.title} -- {this.props.name} -- {this.props.location}
        </div>
      );
    }
  };

  export default Footer;