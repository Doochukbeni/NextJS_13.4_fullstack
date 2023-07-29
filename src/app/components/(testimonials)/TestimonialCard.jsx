import Image from "next/image";
import React from "react";

const Testimonial = ({}) => {
  return (
    <div className="border border-solid m-4 p-4 shadow-xl bg-white rounded-lg border-slate-100">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          className="mx-auto object-contain h-12"
          src="/image.png"
          alt="company logo"
          height={30}
          width={100}
        />
        <figure className="mt-10">
          <blockquote className="text-center text-lg font-semibold leading-5 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              height={10}
              width={10}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-sm sm:text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Testimonial;
