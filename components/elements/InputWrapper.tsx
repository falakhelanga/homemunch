import { ErrorMessage } from "formik";
import React from "react";

interface InputWrapperPropType {
  children: React.ReactNode;
  label?: string;
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
      {label && (
        <label
          className={`capitalize md:text-lg ${labelClassNames}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      {children}
      {/* <ErrorMessage
        name={name}
        render={(msg) => (
          <div className="bg-black bg-opacity-20 mt-2 px-4 py-2 text-white text-xl">
            {msg}
          </div>
        )}
      /> */}
    </div>
  );
};

export default InputWrapper;
