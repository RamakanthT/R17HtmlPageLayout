import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section1 from "./components/Section1/Section1";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1, name: "Foo", age: "20",
        },
        {
          id: 2,  name: "Bar", age: "30",
        },
        {
          id: 3, name: "Baz", age: "40",
        },
      ],
      titleText: "title1", nameText: "name1", locationText: "location1",
    };
  }

  updateTitle = (val) => {
    this.setState({ titleText: val });
  };

  updateName = (val) => {
    this.setState({ nameText: val });
  };

  updateLocation = (val) => {
    this.setState({ locationText: val });
  };

  render() {
    return (
      <div>
        <Header 
          title={this.state.titleText}
          name={this.state.nameText}
          location={this.state.locationText} />

        <Section1
          title={this.state.titleText}
          name={this.state.nameText}
          location={this.state.locationText} />


        <div className="articleMain">
          <h1>Article1</h1>
          <label>Title</label> <br />
          <input type="text" className="" name="" placeholder="Enter Title" required value={this.state.titleText}
            onChange={(e) => this.updateTitle(e.target.value)} /> <br /><br />
            <label>Name</label> <br />
          <input type="text" className="" name="" placeholder="Enter Name" required value={this.state.nameText}
            onChange={(e) => this.updateName(e.target.value)} /> <br /><br />
          <label>Location</label> <br />
          <input type="text" className="" name="" placeholder="Enter Location" required value={this.state.locationText}
            onChange={(e) => this.updateLocation(e.target.value)} />
        <div className="tableMain">
        <table border="1">
          <tbody>
            {this.state.data.map((person, i) =>
              <TableRow key={i} data={person} />
            )} 
          </tbody>
        </table>
        </div>

        </div>


        <Footer 
          title={this.state.titleText}
          name={this.state.nameText}
          location={this.state.locationText} />
      </div>
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
