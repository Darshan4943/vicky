import React from 'react';
import './Scroller.css'
import download from './download.jpeg'
// import logo from './logo.svg'

const mentors = [
  { name: 'Mentor 1', image: download, bio: 'Bio of mentor 1' },
  { name: 'Mentor 2', image: download, bio: 'Bio of mentor 2' },
  { name: 'Mentor 3', image: download, bio: 'Bio of mentor 3' },
  { name: 'Mentor 4', image: download, bio: 'Bio of mentor 4' },
  { name: 'Mentor 5', image: download, bio: 'Bio of mentor 5' },
  { name: 'Mentor 5', image: download, bio: 'Bio of mentor 5' },
  { name: 'Mentor 5', image: download, bio: 'Bio of mentor 5' },
  { name: 'Mentor 5', image: download, bio: 'Bio of mentor 5' },
  { name: 'Mentor 5', image: download, bio: 'Bio of mentor 5' },
  
];

const Scroller = () => {
  return (
    
    <div className='horizontal-scroller'>
      {mentors.map((download) => (
        <div key={download.name} className='main'>
          <img src={download.image} alt={download.name} />
          <h2>{download.name}</h2>
          <p>product manager in google india</p>
          <span>6 years</span>
        </div>
      ))}
    </div>
    
    
  );
};

export default Scroller;