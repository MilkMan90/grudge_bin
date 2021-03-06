import React, { Component } from 'react';
import '../style/Form.css';
import moment from 'moment'

class GrudgeForm extends Component {
  submitNewGrudge(e){
    e.preventDefault()
    const newGrudge = {
      name: this.refs.name.value,
      offense: this.refs.offense.value,
      date: moment(new Date(this.refs.date.value)).valueOf()
    }
    console.log(newGrudge.date);
    this.props.handleNewGrudge(newGrudge)
  }
  render() {
    return (
      <div className="GrudgeForm">
        <form>
          <label>
            Offender
            <input type='text' ref='name'/>
          </label>
          <label>
            Offense
            <input type='text' ref='offense'/>
          </label>
          <label>
            Date of Offense
            <input type='date' ref='date'/>
          </label>
          <input type='submit' onClick={(e)=>{this.submitNewGrudge(e)}}/>
        </form>
      </div>
    );
  }
}

export default GrudgeForm;
