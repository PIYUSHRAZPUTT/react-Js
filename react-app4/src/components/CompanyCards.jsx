import React from 'react'
import {Bookmark} from 'lucide-react'

const CompanyCards = (props) => {
  return (
    <div className='card'>
      <div className="top">
        <img src={props.image} alt={props.title} />
        <button>Save  <Bookmark size={16} /></button>
      </div>
      <div className="center">
        <h2>{props.name} <span>{props.time}</span></h2>
        <h1>{props.role}</h1>
        <div className='time'>
          <p>{props.timing}</p>
          <p>{props.schedule}</p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h2>{props.salary}</h2>
          <p>{props.origin}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default CompanyCards
