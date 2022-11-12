import React from "react";
import { Formik, Form as FormiKForm } from "formik";

interface FormPropsType {
  initialValues: any;
  onSubmit: any;
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
