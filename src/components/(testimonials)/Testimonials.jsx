import React from "react";
import Testimonial from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="text-center w-full my-10 py-5 mx-auto ">
      <h1 className="text-3xl font-semibold leading-3 text-slate-700 ">
        Testimonials
      </h1>
      <p className="leading-6 px-3 text-slate-400  font-semibold my-10">
        I have worked with different teams of developers to build a robust and
        scalable web applications{" "}
      </p>
      <main className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-center px-6 py-10 sm:py-10 lg:px-8 mx-auto max-w-7xl">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        {/* <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div> */}
      </main>
    </div>
  );
};

export default Testimonials;
