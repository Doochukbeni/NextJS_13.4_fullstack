"use client";

import React, { useEffect, useState } from "react";
import { slides } from "../helpers/slides";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Carousel = (
  {
    // children: slides,
    // autoSlide = false,
    // autoSlideInterval = 3000,
  }
) => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? slides.length - 1 : current - 1
    );
  const next = () =>
    setCurrent((prevCurrent) =>
      prevCurrent === slides.length - 1 ? 0 : current + 1
    );

  useEffect(() => {
    const autoSlide = true;
    const autoSlideInterval = 6000;
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [current]);

  const goToSlide = (slide) => {
    setCurrent(slide);
  };

  return (
    <section className=" max-w-[880px] h-[500px] md:max-w-[1400px] md:h-[600px] m-auto py-10 px-4 relative group">
      <div
        className="w-full h-full rounded bg-center bg-cover transition-transform ease-out duration-500 shadow-lg"
        style={{ backgroundImage: `url(${slides[current].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prev} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={next} size={30} />
      </div>

      <div className=" absolute flex bottom-[10%] gap-2 left-0 right-0 py-10 sm:py-2 justify-center">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all w-3 h-3 bg-white rounded-full ${
              current === i ? "p-2" : "bg-opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </section>
    // <main className="relative  overflow-hidden">
    //   <div
    //     className=" flex transition-transform ease-out duration-500 "
    //     style={{ transform: `translateX(-${current * 100}%)` }}
    //   >
    //     {slides}
    //   </div>
    //   <div className="absolute inset-0 flex items-center justify-between p-4">
    //     <button
    //       onClick={prev}
    //       className="p-1 rounded-full shadow bg-slate-200 text-gray-900 hover:bg-white"
    //     >
    //       <span className="h-10">{"<"}</span>
    //     </button>
    //     <button
    //       onClick={next}
    //       className="p-1 rounded-full shadow bg-slate-200 text-gray-900 hover:bg-white"
    //     >
    //       <span className="h-10">{">"}</span>
    //     </button>
    //   </div>
    //   <div className="absolute bottom-4 right-0 left-0">
    //     <div className="flex items-center justify-center gap-2">
    //       {slides.map((_, i) => (
    //         <div
    //           className={`transition-all w-3 h-3 bg-white rounded-full ${
    //             current === i ? "p-2" : "bg-opacity-50"
    //           }`}
    //         ></div>
    //       ))}
    //     </div>
    //   </div>
    // </main>
  );
};

export default Carousel;
