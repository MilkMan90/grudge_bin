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
  render() {
    return (
      <div className="App">
        <h1>Crush Thy Enemies</h1>
        <GrudgeForm />
        <GrudgeList grudges={this.state.grudges} handleForgive={(id)=>this.handleForgive(id)}/>
      </div>
    );
  }
}

export default App;
