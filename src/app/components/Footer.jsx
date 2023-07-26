import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-2 bg-slate-800 ">
      <div className=" text-slate-500">
        <p>
          copyright &copy; All right reserved doochukbeni
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
