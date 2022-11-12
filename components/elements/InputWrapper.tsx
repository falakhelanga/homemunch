import React from "react";

interface InputWrapperPropType {
  children: React.ReactNode;
  label: string;
  name: string;
  containerClassNames?: string;
  labelClassNames?: string;
}

const InputWrapper = ({
  children,
  label,
  name,
  labelClassNames,
  containerClassNames,
}: InputWrapperPropType) => {
  return (
    <div className={`min-w-full   flex flex-col ${containerClassNames} `}>
      <label
        className={`capitalize md:text-lg ${labelClassNames}`}
        htmlFor={name}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
