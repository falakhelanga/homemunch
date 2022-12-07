import React, { useState } from "react";
import { useChefAuth } from "../../../../context/chefs/auth";
import { useFireBase } from "../../../../context/firebase";
import Button from "../../../elements/Button";
import Form from "../../../elements/Form";
import ImageUpload from "../../../elements/ImageUpload";

const Step3 = ({ nextStep }: { nextStep: () => void }) => {
  const [loading, setLoading] = useState(false);
  const { chefAuth } = useChefAuth();
  const [profileImage, setProfileImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { addUserInfo } = useFireBase();
  const handleSubmit = async (values: any) => {
    setLoading(true);
    // const { registeredToSellFromHome, foodygieneCertificate } = values;
    if (profileImage || backgroundImage) {
      try {
        await addUserInfo({ profileImage, backgroundImage }, chefAuth?.uid);
        // nextStep();
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
      // return;
    }
    nextStep();
  };

  console.log(profileImage, "profile image");
  console.log(backgroundImage, "background image");

  return (
    <div className="mb-6">
      <Form initialValues={{ image: "" }} onSubmit={handleSubmit}>
        <div>
          <ImageUpload
            setImageUrl={setProfileImage}
            btnText="Upload Your Profile Image"
            name="image"
          />
        </div>
        <div className="mt-4">
          <ImageUpload
            setImageUrl={setBackgroundImage}
            btnText="Upload Your Background Image"
            name="image"
          />
        </div>

        <div className="mt-6 ">
          <Button type="submit" className="font-normal" variant="outline">
            {!loading ? " Continue" : "Submitting..."}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Step3;
