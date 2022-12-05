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
import { doc, getDoc } from "firebase/firestore";

const fields = [
  {
    name: "emailAdress",

    type: "text",
    className: "col-span-2 mt-2",
    placeholder: "Enter your email Adress ",
  },

  {
    name: "password",

    type: "password",
    className: "col-span-2 mt-2",
    placeholder: "Enter your password",
  },
];

const ChefSignInForm = () => {
  const router = useRouter();
  const initialValues = useMemo(
    () => ({
      emailAdress: "",

      password: "",
    }),
    []
  );
  const [loading, setLoading] = useState(false);
  const { setChefAuth } = useChefAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { chefsSignIn, db } = useFireBase();
  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const user = await chefsSignIn(values.emailAdress, values.password);
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setChefAuth({
          ...user,
          ...(docSnap.data() as any),
        });
        Cookies.set(
          "chef",
          JSON.stringify({
            ...docSnap.data(),
          })
        );
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      // setChefAuth({
      //   ...user,
      //   firstName: values.firstName,
      //   lastName: values.lastName,
      //   email: values.emailAdress,
      //   phoneNumber: values.phoneNumber,
      //   zipCode: values.homeAdress,
      // });
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
      router.push("/chefs/admin/meals");
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
          Sign in with Home Munch
        </Title>
      </div>

      <Form
        validationSchema={chefSignUoValidationSchema}
        formClassName="w-full px-6"
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <ErrorBlock error={errorMessage} className="mb-6" />
        <div className="grid grid-cols-2 w-full gap-2">
          {fields.map((field, idx) => {
            return (
              <>
                {field.type !== "phone" ? (
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
                )}
              </>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 mt-4 mx-16">
          <Button type="submit" className="font-normal" variant="outline">
            {!loading ? "Sign in" : "Signing in..."}
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
          Not a member?{" "}
          <Link className="text-[#4484f3]" href={"/auth/chef/signup"}>
            Sign up
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default ChefSignInForm;
