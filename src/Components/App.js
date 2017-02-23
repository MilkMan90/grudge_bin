import React, { Component } from 'react';
import GrudgeForm from './GrudgeForm';
import GrudgeList from './GrudgeList';
import '../style/App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      grudges: []
    }
  }
  componentDidMount(){
    fetch(`/api/grudges`)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        this.setState({
          grudges: res
        }
      );
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
