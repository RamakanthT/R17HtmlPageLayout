import React, { Component } from "react";
import './Section1.css';

class Section1 extends Component {
    render() {
      return (
        <div className="sectionMain">
          <h1>Section1</h1>
          {this.props.title}
          <br />
          {this.props.name}
          <br />
          {this.props.location}
        </div>
      );
    }
  };

  export default Section1;