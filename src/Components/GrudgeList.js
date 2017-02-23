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
  getTotalRedeemed(){
    return this.props.grudges.filter((grudge)=>{
      return grudge.forgiven === true
    }).length
  }
  getTotalUnforgiven(){
    return this.props.grudges.filter((grudge)=>{
      return grudge.forgiven === false
    }).length
  }
  render() {
    let grudgeList;
    let totalGrudges;
    let totalUnforgiven;
    let totalRedeemed;
    if(this.props.grudges){
      let {grudges} = this.props
      grudges = this.state.sortType === 'name' ?  this.sortByName(grudges) : this.sortByDate(grudges)
      grudgeList = grudges.map((grudge)=>{
        return <SingleGrudge
                  key={grudge.id}
                  grudge={grudge}
                  showGrudge={this.props.showGrudge}
                />
      })
      totalGrudges = this.props.grudges.length
      totalUnforgiven = this.getTotalUnforgiven()
      totalRedeemed = this.getTotalRedeemed()
    }
    return (
      <ul className="GrudgeList">
        <button
          className="sort-by-date"
          onClick={()=>this.toggleSortByDate()}>
            Sort By Date {this.state.dateSort === -1 ? "Old > New" : "New > Old"}
        </button>
        <button
          className="sort-by-name"
          onClick={()=>this.toggleSortByName()}>
            Sort By Name {this.state.nameSort === -1 ? "Z > A" : "A > Z"}
        </button>
        <div className="totals">
          Total Grudges: {totalGrudges}
        </div>
        <div className="totals">
          Total Redeemed: {totalRedeemed}
        </div>
        <div className="totals">
          Total Unforgiven: {totalUnforgiven}
        </div>
        <h3 className="grudges-title">
          Grudges
        </h3>
        {grudgeList}
      </ul>
    );
  }
}

export default GrudgeList;
