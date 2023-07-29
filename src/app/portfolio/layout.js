import React from "react";

const layout = ({ children }) => {
  return (
    <div className="my-10">
      <h1 className="sm:text-7xl text-5xl text-slate-700 font-bold">
        My Works
      </h1>
      {children}
    </div>
  );
};

export default layout;
