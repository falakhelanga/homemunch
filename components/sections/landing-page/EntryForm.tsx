import { FormikHelpers } from "formik";
import React, { useMemo, useState } from "react";
import { useFireBase } from "../../../context/firebase";
import Body from "../../elements/Body";
import Button from "../../elements/Button";
import Form from "../../elements/Form";
import TextInput from "../../elements/TextInput";
import Title from "../../elements/Title";
import { toast } from "react-toastify";
const EntryForm = () => {
  const { addEntry } = useFireBase();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialValues = useMemo(() => {
    return {
      name: "",
      phoneNumber: "",
      email: "",
    };
  }, []);
  const handleSubmit = async (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => {
    setIsSubmitting(true);
    try {
      addEntry(values);
      toast.success(
        "We saved you details to our records, we will notify you when we launch"
      );
    } catch (error) {
      toast.error("Oops something went wrong");
      console.log(error, "error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="w-full flex justify-center bg-[url(/images/food-bg.jpg)] bg-no-repeat bg-cover bg-center h-screen items-center  ">
      <div className="h-full w-full bg-[rgba(0,0,0,0.3)] py-28">
        <Body className="flex flex-col h-full items-center ">
          <div className="mb-16 text-center">
            <Title>We are coming soon</Title>
            <p className="text-white mt-6 ">
              {
                "Leave your email adress and your phone number, and we'll let you know when we launch "
              }
            </p>
          </div>

          <Form
            className="w-full md:w-1/2 w-full  "
            initialValues={initialValues}
            onSubmit={handleSubmit as any}
          >
            <TextInput
              labelClassNames="text-white"
              placeholder="Enter your name"
              containerClassNames=""
              name="name"
              label="name"
              inputClassNames="bg-[rgba(0,0,0,0.3)] border border-hmYellow text-white"
            />
            <TextInput
              placeholder="Enter your email address"
              labelClassNames="text-white"
              containerClassNames="my-6"
              inputClassNames="bg-[rgba(0,0,0,0.3)] border border-hmYellow text-white"
              name="email"
              label="email"
            />
            <TextInput
              placeholder="Enter your phone number"
              inputClassNames="bg-[rgba(0,0,0,0.3)] border border-hmYellow text-white"
              labelClassNames="text-white"
              containerClassNames=""
              name="phoneNumber"
              label="phone number"
            />

            <Button className="mt-6 text-white" type="submit">
              {isSubmitting ? "Submitting..." : "Notify me"}
            </Button>
          </Form>
        </Body>
      </div>
    </div>
  );
};

export default EntryForm;
