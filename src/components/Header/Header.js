import React, { Component } from "react";
import './Header.css';

class Header extends Component {
    render() {
      return (
        <div className="headerMain">
          <h2>Header</h2>
          {this.props.title} -- {this.props.name} -- {this.props.location}
        </div>
      );
    }
}

export default Header;