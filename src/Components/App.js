import React, { Component } from 'react';
import GrudgeForm from './GrudgeForm';
import GrudgeList from './GrudgeList';
import GrudgeDetails from './GrudgeDetails';
import pug from '../imgs/puglogo.svg'
import '../style/reset.css';
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
    let grudgeToEdit = this.findGrudge(id)
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
  findGrudge(id){
    return this.state.grudges.find((grudge)=>{
      return grudge.id === id
    })
  }
  render() {
    let grudgeDetail = '';
    if(this.state.showGrudgeID !== null){
      const grudge = this.findGrudge(this.state.showGrudgeID)
       grudgeDetail = <GrudgeDetails grudge={grudge} handleForgive={(id)=>this.handleForgive(id)}/>
    }
    return (
      <div className="App">
        <header>
          <img className="pug-logo1" src={pug}/>
          <h1>Pugs Not Hugs</h1>
          <img className="pug-logo2" src={pug}/>
        </header>
        <GrudgeForm       handleNewGrudge={(grudge)=>{this.submitNewGrudge(grudge)}}
        />
        <div
          className="grudge-info-container"
        >
          <GrudgeList
            grudges={this.state.grudges} showGrudge={(id)=>this.showGrudgeDetail(id)}
          />
          {grudgeDetail}
        </div>
      </div>
    );
  }
}

export default App;
