import React, { Component } from 'react';
import moment from 'moment'
import '../style/Details.css';


class GrudgeDetails extends Component {
  render() {
    const {grudge} = this.props
    return (
      <div className="GrudgeDetails">
        <div className="item offense">
          Offense: {grudge.offense}
        </div>
        <div className="item date-of-offense">
          Date of Offense: {moment(grudge.date).format("MMM Do YY")}
        </div>
        <button
          className="item forgive-button"
          onClick={()=>this.props.handleForgive(grudge.id)}
        >
          {grudge.forgiven ? 'Unforgive' : 'Forgive'}
        </button>
      </div>
    );
  }
}

export default GrudgeDetails
