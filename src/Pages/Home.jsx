import React from "react";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Components/Categories";

export default function Home() {
    const categories = useLoaderData();
    console.log(categories);
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subTitle={
          "Choose your desired coffee category to browse through specific coffees that fit in ypur taste"
        }
      ></Heading>
      {/* categories tab section */}
      <Categories categories={categories}></Categories>

      {/* dynamic nested components */}
      <Outlet></Outlet>
    </div>
  );
}
