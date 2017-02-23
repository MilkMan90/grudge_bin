import React, { Component } from 'react';
import GrudgeForm from './GrudgeForm';
import GrudgeList from './GrudgeList';
import GrudgeDetails from './GrudgeDetails';
import '../style/App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      grudges: [],
      showGrudgeID: null
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
  submitNewGrudge(grudge){
    fetch(`/api/grudges`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grudge
      })
    })
    .then((res)=>{
      return res.json();
    }).then((res)=>{
      this.setState({
        grudges: res
      })
    })
  }
  handleForgive(id){
    let grudgeToEdit = this.state.grudges[id]
    console.log(grudgeToEdit);
    grudgeToEdit.forgiven = !grudgeToEdit.forgiven;
    this.putSingleGrudge(grudgeToEdit)
  }
  putSingleGrudge(grudge){
    fetch(`/api/grudges`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grudge,
        id: grudge.id
      })
    })
    .then((res)=>{
      return res.json();
    }).then((res)=>{
      this.setState({
        grudges: res
      })
    })
  }
  showGrudgeDetail(id){
    this.setState({
      showGrudgeID: id
    })
  }
  render() {
    let grudgeDetail = '';
    if(this.state.showGrudgeID !== null){
       grudgeDetail = <GrudgeDetails grudge={this.state.grudges[this.state.showGrudgeID]} handleForgive={(id)=>this.handleForgive(id)}/>
    }
    return (
      <div className="App">
        <h1>Crush Thy Enemies</h1>
        <GrudgeForm handleNewGrudge={(grudge)=>{this.submitNewGrudge(grudge)}}/>
        <GrudgeList grudges={this.state.grudges} showGrudge={(id)=>this.showGrudgeDetail(id)}/>
        {grudgeDetail}
      </div>
    );
  }
}

export default App;
