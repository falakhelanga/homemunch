import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`md:text-7xl text-4xl font-bold ${className}`}>
      {children}
    </div>
  );
};

export default Heading;
