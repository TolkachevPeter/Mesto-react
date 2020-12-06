import React from 'react';
import api from '../utils/api';


function Card(props) {

    const { card } = props;


  return (
    <li className='card'>
      <button
        type='button'
      ></button>
      <div className='place-card'>
        <img
          src={card.link}
          alt={card.name}
          className='place-card__image'
        />
      </div>
      <h2 className='card__caption'>{card.name}</h2>
      <div className='card__like-block'>
        <button
          type='button'
        ></button>
        <span className='card__counter'></span>
      </div>
    </li>
  );
}

export default Card;
