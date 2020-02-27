import React, { useEffect, useState } from 'react';
import '../cards/Cards.css';

const Cards = (props) => {
  
  return (
    <div className="cardContainer">
      <div className="cardHeader">{props.cardConfig.header}</div>
      <div className="cardBody">
          <hr/>
          <span onClick={() =>{console.log('clicked')}}>All open requests</span>
          <hr/>
          <span>Requests assigned to me</span>
          <hr/>
          <span>Open and assigned to me</span>
          {props.cardConfig.body}
      </div>
      <div className="cardFooter"></div>
    </div>
  );
};

export default Cards;