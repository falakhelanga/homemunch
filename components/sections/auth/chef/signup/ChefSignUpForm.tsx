import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useFireBase } from "../../../../../context/firebase";
import Button from "../../../../elements/Button";
import FaceBookLogin from "../../../../elements/FaceBookLogin";
import Form from "../../../../elements/Form";
import GoogleLogin from "../../../../elements/GoogleLogin";
import GooglePlaces from "../../../../elements/GooglePlaces";
import PhoneInput from "../../../../elements/PhoneInput";
import TextInput from "../../../../elements/TextInput";
import Title from "../../../../elements/Title";
import { chefSignUoValidationSchema } from "./validationSchema";
import { useRouter } from "next/router";
import ErrorBlock from "../../../../elements/ErrorBlock";
import { useChefAuth } from "../../../../../context/chefs/auth";
import Cookies from "js-cookie";
import LocationInput from "../../../../elements/LocationInput";

const fields = [
  {
    name: "firstName",

    type: "text",
    className: "col-span-1",
    placeholder: "Enter your name",
  },
  {
    name: "lastName",

    type: "text",
    className: "col-span-1",
    placeholder: "Enter your last name",
  },
  {
    name: "emailAdress",

    type: "text",
    className: "col-span-1 mt-2",
    placeholder: "Enter your email Adress ",
  },
  {
    name: "phoneNumber",

    type: "phone",
    className: "col-span-1 mt-2",
    placeholder: "Enter your phone number",
  },
  {
    name: "homeAdress",

    type: "location",
    className: "col-span-2 mt-2",
    placeholder: "Enter your zipcode",
  },
  {
    name: "password",

    type: "password",
    className: "col-span-1 mt-2",
    placeholder: "Enter your password",
  },
  {
    name: "confirmPassword",

    type: "password",
    className: "col-span-1 mt-2",
    placeholder: "Confirm your password",
  },
];

const ChefSignUpForm = () => {
  const router = useRouter();
  const initialValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      emailAdress: "",
      phoneNumber: "",
      homeAdress: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );
  const [loading, setLoading] = useState(false);
  const { setChefAuth } = useChefAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { chefsSignUp } = useFireBase();
  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const user = await chefsSignUp(
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.emailAdress,
          phoneNumber: values.phoneNumber,
          zipCode: values.homeAdress,
        },
        values.password
      );
      setChefAuth({
        ...user,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.emailAdress,
        phoneNumber: values.phoneNumber,
        zipCode: values.homeAdress,
      });
      // Cookies.set(
      //   "chef",
      //   JSON.stringify({
      //     firstName: values.firstName,
      //     lastName: values.lastName,
      //     email: values.emailAdress,
      //     phoneNumber: values.phoneNumber,
      //     zipCode: values.homeAdress,
      //   })
      // );
      router.push("/chefs/onboarding");
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
    console.log(values);
  };

  return (
    <div className=" w-full pt-8">
      <div className="mb-8">
        <Title size="sm" className="text-center text-black">
          Sign up with Home Munch
        </Title>
      </div>

      <Form
        validationSchema={chefSignUoValidationSchema}
        formClassName="w-full px-6"
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <ErrorBlock error={errorMessage} className="mb-6" />
        <div className="grid grid-cols-2 w-full gap-4">
          {fields.map((field, idx) => {
            return (
              <>
                {(field.type === "text" || field.type === "password") && (
                  <TextInput
                    key={field.name}
                    containerClassNames={field.className}
                    {...field}
                  />
                )}
                {field.type === "location" && (
                  <LocationInput
                    key={field.name}
                    containerClassNames={field.className}
                    {...field}
                  />
                )}
                {field.type === "phone" && (
                  <PhoneInput
                    key={field.name}
                    containerClassNames={field.className}
                    {...field}
                  />
                )}
              </>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 mt-4 mx-16">
          <Button type="submit" className="font-normal" variant="outline">
            {!loading ? " Sign Up" : "Signing Up..."}
          </Button>
          <div className="w-full flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-[#d8d8d8]"></div>
            <span className="text-gray-500">or</span>
            <div className="flex-1 h-[1px] bg-[#d8d8d8]"></div>
          </div>
          <FaceBookLogin isSignUp />
          <GoogleLogin isSignUp />
        </div>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-[#4484f3]" href={"/auth/chef/signin"}>
            Log in
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default ChefSignUpForm;
