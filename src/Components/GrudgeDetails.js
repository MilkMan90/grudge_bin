import React, { Component } from 'react';
import moment from 'moment'

class GrudgeDetails extends Component {
  render() {
    const {grudge} = this.props
    return (
      <div className="GrudgeDetails">
        <div>Offense: {grudge.offense}</div>
        <button onClick={()=>this.props.handleForgive(grudge.id)}>{grudge.forgiven ? 'Unforgive' : 'Forgive'}</button>
        <div>Date of Offense: {moment(grudge.date).format("MMM Do YY")}</div>
      </div>
    );
  }
}

export default GrudgeDetails
