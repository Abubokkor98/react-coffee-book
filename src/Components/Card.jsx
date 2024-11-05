import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

export default function Card({ coffee, handleRemove }) {
  const { pathname } = useLocation();
  const { id, name, image, category, type, rating, origin, popularity } =
    coffee;
  return (
    <div className="flex relative my-10">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl w-full overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img className="" src={image} alt={name} />
        </figure>
        <div className="p-4">
          <h2 className="text-xl">Name: {name}</h2>
          <h2 className="">Category: {category}</h2>
          <p>Type: {type}</p>
          <p>Origin:{origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div onClick={()=>handleRemove(id)} className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5">
          <FaTrashAlt size={20} />
        </div>
      )}
    </div>
  );
}
