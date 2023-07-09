import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center text-slate-500">
        <p>copyright &copy; reserved doochukbeni {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
