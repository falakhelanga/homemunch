import React, { useMemo, useState } from "react";
import ErrorBlock from "../../../elements/ErrorBlock";
import Form from "../../../elements/Form";
import PhoneInput from "../../../elements/PhoneInput";
import TextAreaInput from "../../../elements/TextAreaInput";
import TextInput from "../../../elements/TextInput";

import SelectInput from "../../../elements/SelectInput";
import ImageUpload from "../../../elements/ImageUpload";
import Button from "../../../elements/Button";
import { useFireBase } from "../../../../context/firebase";
import { useChefAuth } from "../../../../context/chefs/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const fields = [
  {
    name: "name",

    type: "text",
    className: "col-span-1",
    placeholder: "Enter your meal name",
  },
  {
    name: "price",

    type: "number",
    className: "col-span-1",
    placeholder: "Enter your dish price",
  },
  {
    name: "description",
    rows: "6",
    type: "text-area",
    className: "col-span-2",
    placeholder: "Explain your dish",
  },
  {
    name: "qty",

    type: "number",
    className: "col-span-1",
    placeholder: "Quantity of you dish",
  },
  {
    name: "availability",

    type: "select",
    className: "col-span-1",
    placeholder: "Item days of week availability",
  },
];
const Availabilityoptions = [
  { value: "sunday", label: "Sunday" },
  { value: "monday", label: "Monday" },

  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
];
const CreateMeal = () => {
  const router = useRouter();
  const initialValues = useMemo(
    () => ({
      name: "",
      description: "",
      price: 0,
      qty: 0,
      availabilty: "",
      dishImage: "",
    }),
    []
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { createDish } = useFireBase();
  const { chefAuth } = useChefAuth();

  const onSubmit = async (values: any) => {
    console.log(values, "values");
    setLoading(true);
    try {
      const docRef = await createDish({
        ...values,
        chefLink: `${chefAuth?.uid}__${chefAuth?.firstName} ${chefAuth?.firstName}`,
      });
      toast.success("Dish createf successfully");
      router.back();
      console.log(docRef);
    } catch (error: any) {
      console.log(error, "error");
      setErrorMessage(error?.message);
      toast.error("Oops something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" overflow-auto">
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        <ErrorBlock error={errorMessage} className="mb-6" />
        <div className="grid grid-cols-2 w-full gap-2">
          {fields.map((field, idx) => {
            return (
              <>
                {(field.type === "text" || field.type === "number") && (
                  <TextInput
                    key={idx}
                    containerClassNames={field.className}
                    {...field}
                  />
                )}
                {field.type === "phone" && (
                  <PhoneInput
                    key={idx}
                    containerClassNames={field.className}
                    {...field}
                  />
                )}
                {field.type === "text-area" && (
                  <TextAreaInput
                    key={idx}
                    containerClassNames={field.className}
                    {...field}
                  />
                )}
                {field.type === "select" && (
                  <SelectInput
                    isMulti
                    key={idx}
                    options={Availabilityoptions}
                    containerClassNames={field.className}
                    {...field}
                  />
                )}
                {/* {field.type !== "phone" ? (
                  <TextInput
                    key={idx}
                    containerClassNames={field.className}
                    {...field}
                  />
                ) : (
                  <PhoneInput
                    key={idx}
                    containerClassNames={field.className}
                    {...field}
                  />
                )} */}
              </>
            );
          })}
          <ImageUpload
            name="dishImage"
            btnText="      Upload photo of your dish"
          />
        </div>
        <Button type="submit" className="mt-8 text-white">
          {loading ? "Creating Dish..." : "Create Dish"}
        </Button>
      </Form>
    </div>
  );
};

export default CreateMeal;
