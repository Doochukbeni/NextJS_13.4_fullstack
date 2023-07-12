import Image from "next/image";
import Link from "next/link";
import React from "react";
import { categoryItem } from "../catItem";

const Category = async ({ params }) => {
  const id = parseInt(params.cat);

  const data = categoryItem.find((item) => item.id === id);

  return (
    <section className="my-10">
      <main className="flex mt-5 gap-10 mb-5 cat__item">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="font-semibold text-slate-900 capitalize hero__heading">
            {data.title}
          </h1>
          <p className="text-sm text-slate-700 hero_font-semibold_text text-justify">
            {data.description}
          </p>
          <Link
            className="bg-slate-400 hover:bg-slate-500 hover:text-slate-900 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg button"
            href={data.url}
          >
            See more
          </Link>
        </div>
        <div className="flex-1 relative img__container2">
          <Image
            src={data.image}
            alt="category image"
            fill={true}
            className="rounded-md object-cover"
          />
        </div>
      </main>
    </section>
  );
};

export default Category;
