import React from "react";

const page = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>{params.title}</h1>
    </div>
  );
};

export default page;
