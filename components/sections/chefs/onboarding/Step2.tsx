import { Field } from "formik";
import React, { useMemo, useState } from "react";
import { useChefAuth } from "../../../../context/chefs/auth";
import { useFireBase } from "../../../../context/firebase";
import Button from "../../../elements/Button";
import ErrorBlock from "../../../elements/ErrorBlock";
import Form from "../../../elements/Form";
import PhoneInput from "../../../elements/PhoneInput";
import TextInput from "../../../elements/TextInput";
import { foodSafetyValidation } from "../../auth/chef/signup/validationSchema";

const fields = [
  {
    name: "     registeredToSellFromHome",

    type: "checkbox",
    className: "col-span-1 mt-2",
    placeholder: "Enter your phone number",
  },
  {
    name: " foodygieneCertificate",

    type: "checkbox",
    className: "col-span-2 mt-2",
    placeholder: "Enter your zipcode",
  },
];

const Step2 = ({ nextStep }: { nextStep: () => void }) => {
  const [loading, setLoading] = useState(false);
  const { chefAuth } = useChefAuth();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { addUserInfo } = useFireBase();
  const initialValues = useMemo(
    () => ({
      registeredToSellFromHome: false,
      foodygieneCertificate: false,
    }),
    [chefAuth]
  );
  const handleSubmit = async (values: any) => {
    setLoading(true);
    const { registeredToSellFromHome, foodygieneCertificate } = values;

    try {
      await addUserInfo(
        { registeredToSellFromHome, foodygieneCertificate },
        chefAuth?.uid
      );
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
        validationSchema={foodSafetyValidation}
        formClassName="w-full "
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <ErrorBlock error={errorMessage} className="mb-6" />
        <div className="grid grid-cols-2 w-full gap-2">
          <Field name="registeredToSellFromHome">
            {({ field, form, meta }: { field: any; form: any; meta: any }) => (
              <div className="col-span-2">
                <div className="flex justify-between  ">
                  <span>
                    Have you registered with the local council to sell food from
                    home?
                  </span>
                  <input className={``} type="checkbox" {...field} />
                </div>
                {meta.touched && meta.error && (
                  <div className="text-red-600 text-sm   bg-opacity-10">
                    {meta.error}
                  </div>
                )}
              </div>
            )}
          </Field>
          <Field name="foodygieneCertificate">
            {({ field, form, meta }: { field: any; form: any; meta: any }) => (
              <div className="col-span-2">
                <div className="flex justify-between  ">
                  <span>Do you have an food hygiene certificate?</span>
                  <input className={``} type="checkbox" {...field} />
                </div>
                {meta.touched && meta.error && (
                  <div className="text-red-600 text-sm   bg-opacity-10">
                    {meta.error}
                  </div>
                )}
              </div>
            )}
          </Field>
          {/* <label className="flex justify-between  col-span-2">
            <span>
              Have you registered with the local council to sell food from home?
            </span>
            <Field type="checkbox" name="registeredToSellFromHome" />
             {meta.touched && meta.error && (
              <div className="text-red-600 text-sm p-2  bg-opacity-10">
                {meta.error}
              </div>
            )}
          </label>
          <label className="flex justify-between  col-span-2 mt-4">
            <span>Do you have an food hygiene certificate?</span>
            <Field type="checkbox" name="foodygieneCertificate" />
          </label> */}
          {/* {fields.map((field, idx) => {
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
          })} */}
        </div>
        <div>
          <div className="mt-6 ">
            <Button type="submit" className="font-bold" variant="secondary">
              {!loading ? " Continue" : "Submitting..."}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Step2;
