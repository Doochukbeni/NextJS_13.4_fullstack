import React from "react";
import PortfolioItem from "../../components/PortfolioItem";
import { categoryItem } from "./catItem";

export const metadata = {
  title: "My work samples",
  description: "this some of the sample of my portfolio",
};

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl mt-5 font-semibold text-zinc-500">
        Select a project you wish to view
      </h1>

      <div className="flex flex-col w-full mx-auto my-2 flex-wrap md:flex-row gap-5 mb-5">
        {categoryItem.map((item) => (
          <PortfolioItem
            url={`/portfolio/${item.id}`}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
