import React, { Component } from 'react';
import moment from 'moment'
import '../style/Details.css';


class GrudgeDetails extends Component {
  render() {
    console.log(this.props.grudge);

    const {grudge} = this.props
    return (
      <div className="GrudgeDetails">
        <div className="Offense">
          Offense: {grudge.offense}
        </div>
        <div className="date-of-offense">
          Date of Offense: {moment(grudge.date).format("MMM Do YY")}
        </div>
        <button
          onClick={()=>this.props.handleForgive(grudge.id)}
        >
          {grudge.forgiven ? 'Unforgive' : 'Forgive'}
        </button>
      </div>
    );
  }
}

export default GrudgeDetails
