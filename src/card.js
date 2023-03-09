import React from 'react';
import './card.css';


export default function Card(props) {
  return (
    <div className="card">
      
        <div className="photo">
          <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" alt="Profile-pic" />
        </div>
        <div className='des'>
            <p>{props.designation}</p>
            <h1>{props.name}</h1>
        </div>
        <div className='description'>
        <p>{props.description}</p>
        </div>
      </div>

  );
};