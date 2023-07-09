import Link from "next/link";
import React from "react";
import PortfolioItem from "../components/PortfolioItem";

export const metadata = {
  title: "My work samples",
  description: "this some of the sample of my portfolio",
};

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl text-zinc-500">
        Select a project you wish to view
      </h1>

      <div className="flex gap-5 mb-5">
        <PortfolioItem url="/portfolio/slack" title="Slack clone" />
        <PortfolioItem url="/portfolio/gmail" title="gmail clone" />
        <PortfolioItem url="/portfolio/chatapp" title="chat app" />
        <PortfolioItem url="/portfolio/linkedin" title="linkedin clone" />
      </div>
    </div>
  );
};

export default Portfolio;
