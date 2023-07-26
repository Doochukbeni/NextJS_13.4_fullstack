import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl my-10 mx-auto bg-slate-300">
      <main className="flex  flex-col-reverse justify-center sm:flex-row p-2 gap-8 mb-12 items-center contain">
        <section className=" sm:w-1/2 hero__text flex flex-col item">
          <h1 className="font-semibold text-slate-900  hero__heading">
            This is just a NextJS portfolio Sample
          </h1>
          <p className="text-2xl  text-slate-700 hero__text">
            This is just a collection of some of my works in the field of web
            development but most especially ReactJS and NextJS 13.4. The links
            and sample of other works will be included in the right section.
          </p>
          <Link
            className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg button"
            href="/"
          >
            See more
          </Link>
        </section>
        <main className="item sm:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="hero image"
            height={500}
            width={500}
            className="hero__image"
          />
        </main>
      </main>
    </div>
  );
}
