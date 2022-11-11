import React from "react";

const Body = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-8 sm:px-8 lg:px-8 w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Body;
