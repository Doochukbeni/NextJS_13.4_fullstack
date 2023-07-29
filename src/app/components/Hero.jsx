import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="flex max-w-7xl flex-col-reverse  mx-auto justify-center sm:flex-row py-5 pl-5 gap-8 mb-12 items-center">
      <section className="flex-1 sm:w-1/2  flex flex-col gap-10">
        <h1 className="font-semibold text-4xl sm:text-6xl hero__heading">
          This is just a NextJS portfolio Sample
        </h1>
        <p className="text-xl sm:text-2xl  text-slate-500 font-semibold gap-5">
          This is just a collection of some of my works in the field of web
          development but most especially ReactJS and NextJS 13.4. The links and
          sample of other works will be included in the right section.
        </p>
        <Link
          className="bg-teal-600 hover:bg-teal-700 active:teal-900 hover:text-slate-300 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg button"
          href="/portfolio"
        >
          See more
        </Link>
      </section>
      <main className="flex-1 relative sm:w-1/2">
        <Image
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="hero image"
          height={500}
          width={500}
          className="hero__image object-cover rounded-md"
        />
      </main>
    </main>
  );
};

export default Hero;
