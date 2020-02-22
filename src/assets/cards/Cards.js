import React, { useEffect, useState } from 'react';
import '../cards/Cards.css';

const Cards = (props) => {
  useEffect(() =>{
    console.log('cardHeader', props.cardConfig);
  });
  
  return (
    <div className="cardContainer">
      <div className="cardHeader">{props.cardConfig.header}</div>
      <div className="cardBody">
        
          <a onClick={() =>{console.log('clicked')}}>All open requests</a>
          <hr/>
          <a>Requests assigned to me</a>
          <hr/>
          <a>Open and assigned to me</a>
        
      </div>
      <div className="cardFooter"></div>
    </div>
  );
};

export default Cards;