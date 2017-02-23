import React, { Component } from 'react';
import SingleGrudge from './SingleGrudge'
import '../style/List.css';

class GrudgeList extends Component {
  constructor(){
    super()
    this.state = {
      sortType: 'name',
      nameSort: -1,
      dateSort: -1
    }
  }
  sortByName(grudges){
      return grudges.sort((a, b)=>{
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return this.state.nameSort;
        }
        if (nameA > nameB) {
          return -this.state.nameSort;
        }
        return 0;
      })
    }
  sortByDate(grudges){
    return grudges.sort((a, b) => {
      if(this.state.dateSort === -1) {
        return a.date - b.date;
      } else {
        return b.date - a.date;
      }
    });
  }
  toggleSortByName(){
    this.setState({
      sortType: 'name',
      nameSort: this.state.nameSort * -1
    })
  }
  toggleSortByDate(){
    this.setState({
      sortType: 'date',
      dateSort: this.state.dateSort * -1
    })
  }
  render() {
    let grudgeList;
    if(this.props.grudges){
      let {grudges} = this.props
      grudges = this.state.sortType === 'name' ?  this.sortByName(grudges) : this.sortByDate(grudges)
      grudgeList = grudges.map((grudge)=>{
        return <SingleGrudge key={grudge.id} grudge={grudge} showGrudge={this.props.showGrudge}/>
      })
    }
    return (
      <ul className="GrudgeList">
        <button onClick={()=>this.toggleSortByDate()}>Sort By Date {this.state.dateSort === -1 ? "Old > New" : "New > Old"}</button>
        <button onClick={()=>this.toggleSortByName()}>Sort By Name {this.state.nameSort === -1 ? "Z > A" : "A > Z"}</button>
        {grudgeList}
      </ul>
    );
  }
}

export default GrudgeList;
