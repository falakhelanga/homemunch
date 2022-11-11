import React from "react";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`md:text-5xl text-2xl   text-white font-medium ${className}`}
    >
      {children}
    </div>
  );
};

export default Title;
