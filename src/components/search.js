import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  clicked = () => {
    axios.get("/api/get").then(response => {
    //   console.log("response", response.data);
      this.props.setList(response.data)
    });
  };
  render() {
    let iconsList = [
      { icon: "fab fa-react icon", text: "React" },
      { icon: "fab fa-node-js icon", text: "NodeJs/ Express" }
    ];
    let mapIcons = iconsList.map(val => {
      return (
        <div className="container" key={val.text}>
          {/* <i className={val.icon}></i>
            <div className="text">{val.text}</div> */}
        </div>
      );
    });

    return (
      <div className="App">
        <button onClick={this.clicked}>Click</button>
        {mapIcons}
      </div>
    );
  }
}

export default Search;
