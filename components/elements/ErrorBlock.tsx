import React from "react";

const ErrorBlock = ({
  error,
  className,
  style,
}: {
  error: string | null;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <span
      style={style}
      className={`${className} text-red-600 text-sm p-2 bg-red-500 bg-opacity-10 rounded-md  ${
        error ? "block" : "hidden"
      }`}
    >
      <p>{error}</p>
    </span>
  );
};

export default ErrorBlock;
