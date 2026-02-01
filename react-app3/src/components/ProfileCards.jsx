import React from 'react'

const ProfileCards = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt="profile" />
      <h1>{props.name},{props.age}</h1>
      <h3>{props.role}</h3>
      <button>view profile</button>
    </div>
  )
}

export default ProfileCards
