"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import useSWR from "swr";

const Dashboard = () => {
  const router = useRouter();

  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          content,
          image,
          username: session?.data?.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="font-semibold text-2xl text-gray-400 leading-4">
          Loading ...
        </p>
      </div>
    );
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className="flex flex-col md:flex-row w-full my-10 mx-auto gap-20 py-8 ">
        <div className="flex-1">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-screen">
              <p className="font-semibold text-2xl text-gray-400 leading-4">
                Loading ...
              </p>
            </div>
          ) : (
            data?.map((post) => (
              <div
                key={post._id}
                className="flex items-center justify-between my-5 mx-0 bg-zinc-200 pr-3"
              >
                <div className="">
                  <Image
                    src={post.image}
                    alt=""
                    width={200}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <h2 className="text-slate-800 text-2xl font-semibold capitalize ">
                    {post.title}
                  </h2>
                  <Link
                    href={`/blog/${post._id}`}
                    className="leading-3 rounded-md w-fit bg-indigo-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    see more
                  </Link>
                </div>

                <span
                  className="text-red-500 font-bold cursor-pointer"
                  onClick={() => handleDelete(post._id)}
                >
                  <MdDelete size={30} />
                </span>
              </div>
            ))
          )}
        </div>

        <div className="flex-1">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <h1 className="font-semibold text-slate-800 text-3xl text-center">
              Add New Post
            </h1>
            <input
              type="text"
              placeholder="Title"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
            <input
              type="text"
              placeholder="Description"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />

            <input
              type="text"
              placeholder="Image Url"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
            <textarea
              id="content"
              name="content"
              placeholder="Content"
              rows="4"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            ></textarea>

            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Post
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
