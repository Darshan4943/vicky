import React from 'react';
import './card.css';


export default function Card2(props) {
  return (
    <div className="card">
      
        <div className="photo">
          <img src="https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile-pic" />
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