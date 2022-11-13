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
  formClassName?: string;
  validationSchema?: any;
}

const Form = ({
  initialValues,
  onSubmit,
  children,
  className,
  formClassName,
  validationSchema,
  ...rest
}: FormPropsType) => {
  return (
    <div className={`${className}`}>
      <Formik
        validationSchema={validationSchema}
        {...rest}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <FormiKForm className={formClassName}>{children}</FormiKForm>
      </Formik>
    </div>
  );
};

export default Form;
