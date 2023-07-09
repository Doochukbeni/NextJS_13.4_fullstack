import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  console.log(params.category);
  return (
    <div>
      <Link href={`/products/${params.category}/${params.id}`}>
        <h1 className="text-3xl text-slate-700">{params.category}</h1>
      </Link>
    </div>
  );
};

export default page;
