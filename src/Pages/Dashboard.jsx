import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import { getAllFavorite, removeFavorite } from '../utils';
import Card from '../Components/Card';


export default function Dashboard() {


  const [coffees, setCoffees] = useState([]);
  useEffect(()=>{
    const favorite = getAllFavorite();
    setCoffees(favorite);
  },[])

  const handleRemove = id =>{
    removeFavorite(id);
    const favorite = getAllFavorite();
    setCoffees(favorite);
  }
  return (
    <>
   <Heading title={'Welcome to Dashboard'} subTitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'}></Heading>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 p-5">
        {coffees.map((coffee) => (
          <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  )
}
