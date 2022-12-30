import React, { useState } from "react";
import { useChefAuth } from "../../../../context/chefs/auth";
import { useFireBase } from "../../../../context/firebase";
import Button from "../../../elements/Button";
import Form from "../../../elements/Form";
import ImageUpload from "../../../elements/ImageUpload";
import TextInput from "../../../elements/TextInput";
import TextAreaInput from "../../../elements/TextAreaInput";
import * as Yup from "yup";
const Step3 = ({ nextStep }: { nextStep: () => void }) => {
  const [loading, setLoading] = useState(false);
  const { chefAuth } = useChefAuth();
  const [profileImage, setProfileImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { addUserInfo } = useFireBase();
  const handleSubmit = async (values: any) => {
    console.log("ss");
    console.log(values, "value");

    setLoading(true);

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
    <div className="mb-6">
      <Form
        initialValues={{
          kitchenName: "",
          kitchenBio: "",
          kitchenBackgroundImage: "",
        }}
        validationSchema={Yup.object().shape({
          kitchenName: Yup.string()
            .min(2, "Too Short!")
            .max(70, "Too Long!")
            .required("Please enter your kitchen name."),
          kitchenBio: Yup.string()
            .min(20, "Too Short!")
            // .max(70, "Too Long!")
            .required("Please describe your kitchen."),

          kitchenBackgroundImage: Yup.string().required(
            "Please upload your kitchen background image"
          ),
        })}
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 w-full gap-6">
          <div>
            <TextInput
              containerClassNames=""
              type="text"
              name="kitchenName"
              placeholder="Please enter your kitchen name"
            />
          </div>
          <div>
            <TextAreaInput
              containerClassNames=" "
              // type="text"
              name="kitchenBio"
              placeholder="Please describe your kitchen"
            />
          </div>
          <div className="">
            <ImageUpload
              setImageUrl={setBackgroundImage}
              btnText="Upload Your Kitchen Background Image"
              name="kitchenBackgroundImage"
            />
          </div>
        </div>

        <div className="mt-6 ">
          <Button type="submit" className="font-bold" variant="secondary">
            {!loading ? " Continue" : "Submitting..."}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Step3;
