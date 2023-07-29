import Image from "next/image";
import Link from "next/link";
import React from "react";
import { categoryItem } from "../catItem";

const Category = async ({ params }) => {
  const id = parseInt(params.cat);

  const data = categoryItem.find((item) => item.id === id);

  return (
    <section className="sm:my-10">
      <main className="flex flex-col-reverse sm:flex-row gap-10 my-5">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="font-semibold text-5xl text-slate-900 capitalize hero__heading">
            {data.title}
          </h1>
          <p className="text-lg text-slate-700 font-semibold  text-justify">
            {data.description}
          </p>
          <Link
            className="bg-teal-600 hover:bg-teal-700 active:teal-900 hover:text-slate-300 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg button"
            href={data.url}
          >
            See more
          </Link>
        </div>
        <div className="flex-1 w-full relative">
          <Image
            src={data.image}
            alt="category image"
            width={700}
            height={118}
            className="rounded-md object-cover"
          />
        </div>
      </main>
    </section>
  );
};

export default Category;
