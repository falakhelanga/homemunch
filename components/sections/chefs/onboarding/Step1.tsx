import React, { useMemo, useState } from "react";
import { useChefAuth } from "../../../../context/chefs/auth";
import { useFireBase } from "../../../../context/firebase";
import Button from "../../../elements/Button";
import ErrorBlock from "../../../elements/ErrorBlock";
import Form from "../../../elements/Form";
import PhoneInput from "../../../elements/PhoneInput";
import TextInput from "../../../elements/TextInput";
import { chefUpdateValidationSchema } from "./validationSchame";
import ImageUpload from "../../../elements/ImageUpload";

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

    type: "text",
    className: "col-span-2 mt-2",
    placeholder: "Enter your zipcode",
  },
];

const Step1 = ({ nextStep }: { nextStep: () => void }) => {
  const [loading, setLoading] = useState(false);
  const { chefAuth } = useChefAuth();
  const [profileImage, setProfileImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { addUserInfo } = useFireBase();
  const initialValues = useMemo(
    () => ({
      firstName: chefAuth?.firstName,
      lastName: chefAuth?.lastName,
      emailAdress: chefAuth?.email,
      phoneNumber: chefAuth?.phoneNumber,
      homeAdress: chefAuth?.zipCode,
      profileImage: "",
      backgroundImage: "",
    }),
    [chefAuth]
  );
  const handleSubmit = async (values: any) => {
    setLoading(true);
    // const { lastName, firstName, emailAdress, phoneNumber, homeAdress,  profileImage ,  backgroundImage} =
    //   values;
    try {
      await addUserInfo(values, chefAuth?.uid);
      nextStep();
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full ">
      <Form
        validationSchema={chefUpdateValidationSchema}
        formClassName="w-full "
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

          <div className="col-span-2 mt-4">
            <ImageUpload
              setImageUrl={setProfileImage}
              btnText="Upload Your Profile Image"
              name="profileImage"
            />
          </div>
          <div className="col-span-2 mt-4">
            <ImageUpload
              setImageUrl={setBackgroundImage}
              btnText="Upload Your Background Image"
              name="backgroundImage"
            />
          </div>
        </div>
        <div>
          <div className="my-6 ">
            <Button type="submit" className="font-bold" variant="secondary">
              {!loading ? " Continue" : "Submitting..."}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Step1;
