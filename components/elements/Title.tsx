import React from "react";

const Title = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) => {
  {
    switch (size) {
      case "sm":
        return (
          <div
            className={`md:text-2xl text-2xl   text-white font-medium ${className}`}
          >
            {children}
          </div>
        );
      default:
        return (
          <div
            className={`md:text-5xl text-2xl   text-white font-medium ${className}`}
          >
            {children}
          </div>
        );
    }
  }
};

export default Title;
