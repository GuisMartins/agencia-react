import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export default function Button(props) {
  return (
    <Link to={props.path} className="btn-mobile">
      <button className={props.class}>{props.text}</button>
    </Link>
  )
}
