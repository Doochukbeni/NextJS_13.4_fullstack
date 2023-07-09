"use client";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await getData();

  return (
    <div>
      {data.map((item) => (
        <Link href={`/products/${item.id}`} key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body} </p>
        </Link>
      ))}
    </div>
  );
};

export default page;

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
