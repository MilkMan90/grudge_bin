import React, { Component } from 'react';

const SingleGrudge = ({grudge, showGrudge}) => {
  return(
    <li
      key={grudge.id}
      className="single-grudge" onClick={()=>showGrudge(grudge.id)}>
      <span>
        {grudge.name}
      </span>
    </li>
  )
}

export default SingleGrudge;
