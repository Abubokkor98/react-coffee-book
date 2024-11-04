import React from 'react'

export default function Card({coffee}) {
    const {name, image, category, type, description} = coffee;
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
  <figure>
    <img className='w-full'
      src={image}
      alt={name} />
  </figure>
  <div className="card-body">
    <h2>{category}</h2>
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>

  </div>
</div>
  )
}
