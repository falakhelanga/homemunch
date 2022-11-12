import React from "react";
import { Formik, Form as FormiKForm, FormikHelpers } from "formik";

interface FormPropsType {
  initialValues: any;
  onSubmit: ((
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>) &
    ((values: any) => void);
  children: React.ReactNode;
  className?: string;
}

const Form = ({
  initialValues,
  onSubmit,
  children,
  className,
  ...rest
}: FormPropsType) => {
  return (
    <div className={`${className}`}>
      <Formik {...rest} onSubmit={onSubmit} initialValues={initialValues}>
        <FormiKForm>{children}</FormiKForm>
      </Formik>
    </div>
  );
};

export default Form;
