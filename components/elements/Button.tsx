import React from "react";

interface ButtonPropType {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: "outline" | "primary" | "secondary";
}

const Button = ({
  children,
  className,
  type = "button",
  onClick,
  variant = "primary",
  ...rest
}: ButtonPropType) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      type={type}
      className={` w-full rounded-lg  px-12 py-2 ${
        variant === "outline" &&
        "bg-transparent border-yellow-300 border-2 hover:bg-hmYellow"
      } 
      ${variant === "primary" && "bg-hmRed hover:opacity-75"}
      ${variant === "secondary" && "bg-hmYellow hover:opacity-75"}
      font-bold  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
