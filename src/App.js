import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import Search from './components/search'
import ShowList from './components/showList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  setList = (list) => {
    this.setState({list})
  }

  render() {
    console.log('list', this.state.list)


    return (
      <div className="App">
        <Search setList={this.setList}/>
        <ShowList list={this.state.list.businesses}/>
      </div>
    );
  }
}

export default App;
