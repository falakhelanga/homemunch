import { Field, useField } from "formik";
import PhoneInputComponent from "react-phone-input-2";
import React from "react";
import InputWrapper from "./InputWrapper";

interface PhoneInputPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
}

const PhoneInput = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,
}: PhoneInputPropType) => {
  const [field, meta, helpers] = useField(name);

  const { value } = field;
  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={containerClassNames}
    >
      <>
        <PhoneInputComponent
          {...field}
          specialLabel=""
          inputClass={`outline-none w-full rounded-lg bg-white py-3 px-2 ${inputClassNames}`}
          inputStyle={{ width: "100%" }}
          enableSearch
          inputProps={{
            name: name,
            onchange: (e: any) => {
              console.log(e);
            },
            required: true,
            autoFocus: true,
          }}
          country={"gb"}
          value={value}
          onChange={(phone, country, e) => {
            helpers.setValue(phone);
          }}
        />
        {meta.touched && meta.error && (
          <div className="text-red-600 text-sm p-2  bg-opacity-10">
            {meta.error}
          </div>
        )}
      </>
    </InputWrapper>
  );
};

export default PhoneInput;
