import { Field, useField } from "formik";
import PhoneInputComponent from "react-phone-input-2";
import React from "react";
import InputWrapper from "./InputWrapper";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useMap } from "../../context/googleMap";

interface PhoneInputPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
}

const LocationInput = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,
}: PhoneInputPropType) => {
  const [field, meta, helpers] = useField(name);

  const { value } = field;
  const {
    ready,
    value: googleValue,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val: any) => {
    setValue(val, false);
    clearSuggestions();
    helpers.setValue(val);
    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    // handleAutoComplete(results, { lat, lng });
  };

  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={containerClassNames}
    >
      <>
        <Combobox
          style={{ width: "100%" }}
          {...field}
          className={`outline-none w-full bg-transparent border-b border-gray-300  py-3 px-2 ${inputClassNames}`}
          onSelect={handleSelect}
        >
          <ComboboxInput
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="combobox-input"
            placeholder="Search location"
            name={name}
          />
          <ComboboxPopover style={{ padding: "0.5rem" }}>
            <ComboboxList style={{ backgroundColor: "white" }}>
              {status === "OK" &&
                data.map(({ place_id, description }: any) => (
                  <ComboboxOption
                    style={{
                      padding: "0.5rem ",
                      borderBottom: "1px solid #f5f5f5",
                    }}
                    key={place_id}
                    value={description}
                  />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
        {meta.touched && meta.error && (
          <div className="text-red-600 text-sm p-2  bg-opacity-10">
            {meta.error}
          </div>
        )}
        {/* <PhoneInputComponent
          {...field}
          specialLabel=""
          inputClass={`outline-none w-full bg-transparent border-b border-gray-300  py-3 px-2 ${inputClassNames}`}
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
        )} */}
      </>
    </InputWrapper>
  );
};

export default LocationInput;
