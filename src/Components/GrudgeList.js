import React, { Component } from 'react';
import SingleGrudge from './SingleGrudge'
import '../style/List.css';

class GrudgeList extends Component {
  render() {
    let grudgeArray;
    if(this.props.grudges){
      grudgeArray = this.props.grudges.map((grudge)=>{
        return <SingleGrudge key={grudge.id} grudge={grudge} showGrudge={this.props.showGrudge}/>
      })
    }
    return (
      <ul className="GrudgeList">
        {grudgeArray}
      </ul>
    );
  }
}

export default GrudgeList;
