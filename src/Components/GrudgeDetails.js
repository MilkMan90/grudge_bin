import React, { Component } from 'react';
import moment from 'moment'
import '../style/Details.css';


class GrudgeDetails extends Component {
  render() {
    const {grudge} = this.props
    return (
      <div className="GrudgeDetails">
        <div>Offense: {grudge.offense}</div>
        <div>Date of Offense: {moment(grudge.date).format("MMM Do YY")}</div>
        <button onClick={()=>this.props.handleForgive(grudge.id)}>{grudge.forgiven ? 'Unforgive' : 'Forgive'}</button>
      </div>
    );
  }
}

export default GrudgeDetails
