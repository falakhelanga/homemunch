import React from "react";
import InputWrapper from "./InputWrapper";
import Select, { GroupBase, OptionsOrGroups } from "react-select";
import { Field, useField } from "formik";
interface SelectInputPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  options?: OptionsOrGroups<any, GroupBase<any>> | undefined;
  defaultValue?: any;
  isMulti?: boolean;
}

const SelectInput = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,

  type = "select",
  options,
  defaultValue,
  isMulti,
}: SelectInputPropType) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={containerClassNames}
    >
      <div>
        <Select
          placeholder={placeholder}
          styles={{
            container: (styles) => ({
              ...styles,
              height: "100%",
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
            }),
            control: (styles) => ({
              ...styles,
              backgroundColor: "transparent",
              padding: "0.3rem 0",

              borderBottom: "1px solid rgb(209 213 219)",
              borderTop: "none",
              borderRight: "none",
              borderLeft: "none",
              borderRadius: "none",
              outline: "none",
            }),
          }}
          defaultValue={defaultValue}
          onChange={(value) => {
            console.log(value, "values");
            helpers.setValue(
              Array.isArray(value)
                ? value.map((item) => item.value)
                : value.value
            );
          }}
          isMulti={isMulti}
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          name={name}
          // value={value}
        />

        {meta.touched && meta.error && (
          <div className="text-red-600 text-sm p-2  bg-opacity-10 mt-[-1.2rem]">
            {meta.error}
          </div>
        )}
      </div>
    </InputWrapper>
  );
};

export default SelectInput;
