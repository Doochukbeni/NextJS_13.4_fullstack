import Image from "next/image";
import React from "react";
import { skillSet } from "./skillSet";

export const metadata = {
  title: "About Me",
  description: "A brief introduction of personality as a Full Stack developer",
};

const Page = () => {
  return (
    <section className="flex flex-col gap-5">
      <div>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <Image
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/passport_photo.JPG"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium text-zinc-400">
                “I am a Fullstack developer who is knowledgeable in both
                Frontend and Backend technologies. I am more of a ReactJS
                developer and experienced with NodeJS. ”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Chukwuma Benjamin Izummuo
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Fullstack ReactJS/NextJS software engineer.
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
      <main className="sm:flex-col md:flex gap-5 bg-gray-200 bg-opacity-75 transition-opacity rounded-xl p-5">
        <div className="items">
          <h1 className="text-3xl font-bold tracking-tight text-gray-600">
            Who is chukwuma Benjamin
          </h1>
          <p className="text-justify text-slate-600 text-semibold leading-6 text-sm">
            Chukwuma Benjamin is a Fullstack web developer who is experienced in
            both Frontend and Backend development. I have over 2 years
            experience as a Fullstack development with expertise in ReactJS and
            NodeJS. I recently started working with NextJS since ReactJS moved
            to frameworks and this has really opened a new spectrum of
            opportunities for my career as a software engineer.
          </p>
        </div>
        <div className="items">
          <h1 className="text-2xl font-bold tracking-tight text-gray-600">
            What I do
          </h1>
          <p className="text-justify text-slate-600 text-semibold leading-6 text-sm ">
            I basically provide IT solutions through web application development
            by building scalable and responsive web Apps using different
            technologies and skill set. I have been exposed to a lot of
            programming languages and tools used in building scalable web
            applications.
          </p>
          <span className="text-justify text-slate-600 text-semibold leading-6 text-sm ">
            These are some of the tools i use for my applications but not
            limited to these:
          </span>
          <ul className="">
            {skillSet.map((skill) => (
              <div key={skill.id}>
                <li className="text-justify text-slate-600 text-semibold leading-6 text-sm ">
                  {skill.title}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Page;
