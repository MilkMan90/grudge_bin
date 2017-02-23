import React, { Component } from 'react';

const SingleGrudge = ({grudge, handleForgive}) => {
  return(
    <li key={grudge.id} className="single-grudge">
      <span>{grudge.name}</span>
      <span>{grudge.offense}</span>
      <button onClick={()=>handleForgive(grudge.id)}>{grudge.forgiven ? 'Unforgive' : 'Forgive'}</button>
      <span>{grudge.data}</span>
    </li>
  )
}

export default SingleGrudge;
