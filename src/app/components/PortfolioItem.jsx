import Link from "next/link";
import React from "react";

const PortfolioItem = ({ url, title }) => {
  return (
    <Link
      href={url}
      className="rounded-md border-none w-full sm:w-72 h-96 relative  shadow-lg hover:scale-125 hover:z-20 transition-transform ease-in pro__link "
    >
      <span className="absolute left-2.5 bottom-2.5 text-zinc-300 font-bold capitalize text-xl ">
        {title}
      </span>
    </Link>
  );
};

export default PortfolioItem;
