import React from "react";
import s from "./Para.module.css";

const Para = ({ text }) => {
  return (
    <div className="h-auto flex items-center w-96 relative mt-8">
      <span className={s.text}>{text} </span>
    </div>
  );
};

export default Para;