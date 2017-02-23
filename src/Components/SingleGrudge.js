import React, { Component } from 'react';

const SingleGrudge = ({grudge, showGrudge}) => {
  let forgivenIndicator;
  if(grudge.forgiven){
    forgivenIndicator = "absolved single-grudge"
  } else {
    forgivenIndicator = "still-to-defeat single-grudge"
  }
  return(
    <li
      key={grudge.id}
      className={forgivenIndicator} onClick={()=>showGrudge(grudge.id)}>
      <span >
        {grudge.name}
      </span>
    </li>
  )
}

export default SingleGrudge;
