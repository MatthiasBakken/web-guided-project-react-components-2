import React from 'react'

export default function Pet(props) {
  const { pet: { id, name, type } } = props

  return (
    <div className='pet-friends container' key={id}>
      <p>{name} ({type})</p>
    </div>
  )
}
