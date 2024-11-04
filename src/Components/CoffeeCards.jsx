import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

export default function CoffeeCards() {
    const navigate = useNavigate();
  const { category } = useParams();
  const data = useLoaderData();

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(data.slice(0,6));
    }
  }, [category, data]);

  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 p-5">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
    <button onClick={()=>navigate('/coffees')} className="btn btn-warning">View All</button>
    </>
  );
}
