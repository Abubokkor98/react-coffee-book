import React from 'react'
import { useParams } from 'react-router-dom'

export default function CoffeeCards() {
    const {category} = useParams();
    console.log(category);
  return (
    <div>
        <h1>{category}</h1>
    </div>
  )
}
