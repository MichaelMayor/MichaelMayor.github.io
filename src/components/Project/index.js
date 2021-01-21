/* eslint-disable react/prop-types */
import React from 'react'
export default function Project (props) {
  return <div className="card" style={{ width: '18rem' }}>
      <img src={props.screenshot} className="card-img-top" alt={props.title} />
      <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer">
          <a href={props.link} className="btn btn-dark" rel ="noreferrer" target="_blank">Deployed
              Site</a>
          <a href={props.github} className="btn btn-secondary" rel ="noreferrer"target="_blank">Github
              Page</a>
      </div>
  </div>
}
