import Image from "next/image";
import React from "react";
import { skillSet } from "./skillSet";

export const metadata = {
  title: "About Me",
  description: "A brief introduction of personality as a Full Stack developer",
};

const Page = () => {
  return (
    <section className="flex flex-col my-5 mx-auto gap-10 py-8">
      <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <Image
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/passport_photo.JPG"
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-zinc-400">
                “Hello there! I'm a highly skilled Full Stack Web Developer with
                a wealth of experience in a diverse range of technologies,
                including ReactJS, Next.js, NodeJS, Tailwind CSS, React Redux,
                JavaScript, HTML, and CSS. With a passion for building immersive
                web experiences, I thrive on turning ideas into reality and
                delivering top-notch solutions that exceed expectations.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Chukwuma Benjamin Izummuo
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Fullstack ReactJS/NextJS software engineer.
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
      <main className="sm:flex-col md:flex gap-5 bg-gray-200 bg-opacity-75 transition-opacity rounded-xl p-5">
        <div className="items">
          <h1 className="text-3xl font-bold tracking-tight text-gray-600">
            Who is chukwuma Benjamin ?
          </h1>
          <p className="text-justify text-slate-600 text-semibold leading-6 text-sm">
            Chukwuma Benjamin is an accomplished Full Stack Web Developer with a
            strong focus on ReactJS, Next.js, NodeJS, and Tailwind CSS, I am
            committed to crafting cutting-edge web applications that captivate
            users and deliver an exceptional online experience. With a proven
            track record of successfully developing and deploying innovative
            solutions, I take pride in my ability to bridge the gap between
            creative design and robust functionality.
          </p>
        </div>
        <div className="items">
          <h1 className="text-2xl font-bold tracking-tight text-gray-600">
            Key Highlights:
          </h1>
          <p className="text-justify text-slate-600 text-semibold leading-6 text-sm ">
            🚀 Proficient in building dynamic, responsive user interfaces using
            ReactJS and Next.js, ensuring top-notch performance and seamless
            interactions. 🌐 Expertise in server-side development with NodeJS,
            creating scalable APIs and implementing backend logic to support
            robust frontend applications. 💻 Skilled in crafting visually
            appealing and intuitive user interfaces using Tailwind CSS,
            resulting in sleek and optimized designs. 🎯 Adept at understanding
            project requirements and translating them into well-architected,
            maintainable codebases that stand the test of time. 🔧 Strong
            problem-solving skills, troubleshooting complex issues, and
            optimizing web applications for enhanced efficiency and performance.
            🔄 Continuously staying abreast of the latest industry trends and
            technologies, ensuring that each project benefits from the most
            current tools and methodologies. 💼 Collaborative team player,
            capable of working effectively within cross-functional teams to
            drive project success and meet tight deadlines. 📈 Proven ability to
            adapt and thrive in fast-paced environments, delivering high-quality
            work while maintaining a strong attention to detail. Whether it's a
            challenging web application or an interactive user interface, I am
            dedicated to leveraging my expertise in ReactJS, Next.js, NodeJS,
            Tailwind CSS, and more to create powerful, elegant, and
            user-friendly web solutions that make a lasting impact. Let's
            collaborate on your next digital venture and take it to new heights!
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
