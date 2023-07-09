import React from "react";

const layout = ({ children }) => {
  return (
    <div className="my-10">
      <h1 className="text-8xl text-zinc-700 font-bold"> My Works</h1>
      {children}
    </div>
  );
};

export default layout;
