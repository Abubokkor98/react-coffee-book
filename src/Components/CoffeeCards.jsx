import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Card from './Card';

export default function CoffeeCards() {
    const {category} = useParams();
    const data = useLoaderData();
    
    const [coffees, setCoffees] = useState([]);
    useEffect(()=>{
        const filteredByCategory = [...data].filter(coffee=> coffee.category===category);
        setCoffees(filteredByCategory);
    },[category, data])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 p-5'>
        {
            coffees.map(coffee=> <Card key={coffee.id} coffee={coffee}></Card>)
        }
    </div>
  )
}
