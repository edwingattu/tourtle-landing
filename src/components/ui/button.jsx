
import React from "react";

export const Button = ({ children, className = "", variant = "solid", ...props }) => {
  const base = "inline-block rounded px-4 py-2 font-semibold text-sm";
  const variants = {
    solid: "bg-purple-800 text-white hover:bg-purple-900",
    outline: "border border-purple-800 text-purple-800 hover:bg-purple-100"
  };
  return (
    <button className={`${base} ${variants[variant] || ""} ${className}`} {...props}>
      {children}
    </button>
  );
};
