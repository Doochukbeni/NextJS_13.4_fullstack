import Image from "next/image";
import Link from "next/link";
import React from "react";
import { categoryItem } from "../catItem";

const Category = ({ params }) => {
  console.log(params);
  const title = params.cat;
  return (
    <section className="my-10">
      <main className="flex mt-5 gap-10 mb-5 cat__item">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="font-semibold text-slate-900 capitalize hero__heading">
            {title}
          </h1>
          <p className="text-sm text-slate-700 hero_font-semibold_text text-justify">
            This is an old Slack App clone. I built this as a practice project
            to improve my dev skill as well as build the muscle memory. This
            project was built with ReactJS and still works fine but you might
            encounter bugs along the way. Hopefully someday i will have the time
            to rebuild this app with modern technology. I hope you enjoy the
            project. Thank you for your time
          </p>
          <Link
            className="bg-slate-400 hover:bg-slate-500 hover:text-slate-900 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg button"
            href="https://slack-clone-beb5d.web.app"
          >
            See more
          </Link>
        </div>
        <div className="flex-1 relative img__container2">
          <Image
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
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
