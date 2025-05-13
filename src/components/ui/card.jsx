
import React from "react";

export const Card = ({ children }) => (
  <div className="border rounded-lg shadow-sm bg-white">{children}</div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className || ""}`}>{children}</div>
);
