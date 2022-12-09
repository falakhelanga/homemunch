import { Field } from "formik";
import React from "react";
import InputWrapper from "./InputWrapper";

interface TextInputPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
}

const TextInput = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,

  type = "text",
}: TextInputPropType) => {
  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={containerClassNames}
    >
      <Field name={name}>
        {({ field, form, meta }: { field: any; form: any; meta: any }) => (
          <div>
            <input
              className={`outline-none w-full  bg-transparent border-b border-gray-300 py-3 px-2 ${inputClassNames}`}
              type={type}
              {...field}
              placeholder={placeholder}
            />
            {meta.touched && meta.error && (
              <div className="text-red-600 text-sm p-2  bg-opacity-10">
                {meta.error}
              </div>
            )}
          </div>
        )}
      </Field>
    </InputWrapper>
  );
};

export default TextInput;
