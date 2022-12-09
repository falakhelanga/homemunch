import React, { useEffect, useMemo, useState } from "react";
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
import { createMealValidationSchema } from "./createMealValidationSchema";
const Availabilityoptions = [
  { value: "sunday", label: "Sunday" },
  { value: "monday", label: "Monday" },

  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
];

const cuisineOptions = [
  {
    value: "Asian",
    label: "Asian Cuisine",
  },
  {
    value: "African",
    label: "African Cuisine",
  },
  {
    value: "European",
    label: "European Cuisine",
  },
  {
    value: "American",
    label: "Cuisine of the Americas",
  },
];

const dishTypeOption = [
  {
    value: "break fast",
    label: "Break Fast",
  },
  {
    value: "lunch",
    label: "Lunch",
  },
  {
    value: "dinner",
    label: "Dinner",
  },
];

const fields = [
  {
    name: "name",
    label: "Dish Name",
    type: "text",
    className: "col-span-1",
    placeholder: "Enter your meal name",
  },
  {
    name: "price",
    label: "Dish Price",
    type: "number",
    className: "col-span-1",
    placeholder: "Enter your dish price",
  },
  {
    name: "description",
    label: "Dish Description",
    rows: "6",
    type: "text-area",
    className: "col-span-2",
    placeholder: "Explain your dish",
  },
  {
    name: "qty",
    label: "Dish Quantity",
    type: "number",
    className: "col-span-1",
    placeholder: "Quantity of you dish",
  },
  {
    name: "availability",
    label: "Dish Availability",
    type: "select",
    className: "col-span-1",
    placeholder: "Item days of week availability",
    options: Availabilityoptions,
    isMulti: true,
  },
  {
    name: "cuisineType",
    label: "Cuisine type",
    type: "select",
    className: "col-span-1",
    placeholder: "please select type of cuisine for this dish",
    options: cuisineOptions,
  },
  {
    name: "dishType",
    label: "Dish type",
    type: "select",
    className: "col-span-1",
    placeholder: "please select your dish type",
    options: dishTypeOption,
  },
];

const CreateDishComponent = () => {
  const router = useRouter();
  const initialValues = useMemo(
    () => ({
      name: "",
      description: "",
      price: 0,
      qty: 0,
      availability: "",
      dishImage: "",
      cuisineType: "",
      dishType: "",
    }),
    []
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { createDish } = useFireBase();
  const { chefAuth } = useChefAuth();
  const [imageUrl, setImageUrl] = useState(null);
  const [dishImages, setDishImages] = useState([]);
  useEffect(() => {
    if (imageUrl) {
      setDishImages((currState) => {
        let newState: any = [...currState];
        newState.push(imageUrl);
        return newState;
      });
    }
  }, [imageUrl]);
  const onSubmit = async (values: any) => {
    console.log(values, "values");
    setLoading(true);
    const {
      name,
      description,
      price,
      qty,
      availability,
      dishImage,
      cuisineType,
      dishType,
    } = values;
    try {
      const docRef = await createDish({
        name,
        description,
        price,
        qty,
        availability,

        cuisineType,
        dishType,
        imageGallery: dishImages,
        chefLink: `${chefAuth?.uid}__${chefAuth?.firstName} ${chefAuth?.firstName}`,
      });
      toast.success("Dish created successfully");
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
      <Form
        validationSchema={createMealValidationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <ErrorBlock error={errorMessage} className="mb-6" />
        <div className="grid grid-cols-2 w-full gap-6">
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
                    key={idx}
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
          <div className="col-span-2">
            <ImageUpload
              setImageUrl={setImageUrl}
              name="dishImage"
              btnText="      Upload photo of your dish"
            />
          </div>
          <div className="col-span-2 grid grid-cols-6 gap-2">
            {dishImages.length > 0 &&
              dishImages.map((dishImage, idx) => {
                return (
                  <div
                    className="w-[10rem] aspect-square rounded-md overflow-hidden"
                    key={idx}
                  >
                    <img
                      className="h-full w-full"
                      src={dishImage}
                      alt="dish image"
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <Button type="submit" className="mt-8 text-white">
          {loading ? "Creating Dish..." : "Create Dish"}
        </Button>
      </Form>
    </div>
  );
};

export default CreateDishComponent;
