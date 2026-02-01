import React from 'react'
import profileImg from "../assets/profile0.jpg";

const Card = () => {
  const name="Piyush";
  const role="Frontend Developer";
  const isOnline=true;
  return (
    <div className='parent'>
        <div className='card'>
            <img src={profileImg} alt="profile" />
            <h1>{name}</h1>
            <p>{role}</p>
            <p>Status:{isOnline?"Online":"Offline"}</p>
            <button>view Profile</button>
        </div>
    </div>
  )
}

export default Card
