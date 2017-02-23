import React, { Component } from 'react';
import SingleGrudge from './SingleGrudge'
import '../style/List.css';

class GrudgeList extends Component {
  constructor(){
    super()
    this.state = {
      nameSort: -1,
      dateSort: 'newest'
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

  }
  toggleSortByName(){
      this.setState({
        nameSort: this.state.nameSort * -1
      })
  }
  toggleSortByDate(){

  }
  render() {
    let grudgeList;
    if(this.props.grudges){

      let {grudges} = this.props
      //sort by name
      grudges = this.sortByName(grudges)
      //sort by date

      grudgeList = grudges.map((grudge)=>{
        return <SingleGrudge key={grudge.id} grudge={grudge} showGrudge={this.props.showGrudge}/>
      })
    }
    return (
      <ul className="GrudgeList">
        <button onClick={()=>this.toggleSortByDate()}>Sort By Date</button>
        <button onClick={()=>this.toggleSortByName()}>Sort By Name</button>
        {grudgeList}
      </ul>
    );
  }
}

export default GrudgeList;
