import React from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={` rounded border-2 px-12 py-2 border-yellow-300 border font-bold hover:bg-yellow-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
