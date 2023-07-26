import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  console.log(data);

  return (
    <section className="flex flex-col my-10 mx-auto gap-20 py-8">
      <main className="flex  h-80 sm:flex-row gap-5">
        <div className="flex-1 gap-5 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-slate-700 leading-9 capitalize">
            {data.title}
          </h1>
          <p className="text-justify text-slate-600 font-semibold">
            {data.desc}
          </p>
          <div className="flex items-center gap-5 mt-5">
            <div className="relative rounded-full blog__user">
              <Image
                src={data.image}
                alt="user image"
                className="rounded-full object-cover"
                fill={true}
              />
            </div>
            <span className="text-sm text-slate-500 leading-9 ">
              {data.username}
            </span>
          </div>
        </div>
        <div className="flex-1 relative ">
          <Image
            src={data.image}
            alt="blog image"
            className="object-cover rounded-md w-full h-64 absolute"
            fill
          />
        </div>
      </main>
      <hr className="mx-auto w-1/2 bg-slate-900" />
      <main>
        <p className="text-justify text-slate-600 font-semibold">
          {data.content}
        </p>
      </main>
    </section>
  );
};

export default BlogPost;
